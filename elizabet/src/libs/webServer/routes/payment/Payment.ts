import TransformDate from "../../../../utils/TransformDate";
import db from "../../../database";
import SequelizeParse from "../../../database/utils/SequelizeParse";
import pushNotification from "../../../notification";
import SearchPaymentId from "../../../payment/SearchPaymentId";

enum NotificationType {
  Payment = "payment",
  MPConnect = "mp-connect",
  SubscriptionPreapproval = "subscription_preapproval",
  SubscriptionPreapprovalPlan = "subscription_preapproval_plan",
  SubscriptionAuthorizedPayment = "subscription_authorized_payment",
  PointIntegrationWH = "point_integration_wh",
  Delivery = "delivery",
  // Add more notification types here
}

enum ActionType {
  PaymentCreated = "payment.created",
  PaymentUpdated = "payment.updated",
  ApplicationDeauthorized = "application.deauthorized",
  ApplicationAuthorized = "application.authorized",
  SubscriptionPreapprovalCreated = "subscription_preapproval.created",
  SubscriptionPreapprovalUpdated = "subscription_preapproval.updated",
  SubscriptionPreapprovalPlanCreated = "subscription_preapproval_plan.created",
  SubscriptionPreapprovalPlanUpdated = "subscription_preapproval_plan.updated",
  SubscriptionAuthorizedPaymentCreated = "subscription_authorized_payment.created",
  SubscriptionAuthorizedPaymentUpdated = "subscription_authorized_payment.updated",
  PointIntegrationWHFinished = "point_integration_wh.state_FINISHED",
  PointIntegrationWHCanceled = "point_integration_wh.state_CANCELED",
  PointIntegrationWHError = "point_integration_wh.state_ERROR",
  DeliveryUpdated = "delivery.updated",
  // Add more action types here
}

interface WebhookNotification {
  id: number; // ID da notificação
  live_mode: boolean; // Indica se a URL informada é válida
  type: NotificationType; // Tipo de notificação recebida (payment, mp-connect, subscription, customer, order, etc)
  date_created: string; // Data de criação do recurso (payments, mp-connect, subscription, etc)
  user_id: number; // UserID do vendedor
  api_version: string; // Versão da API
  action: ActionType; // Tipo de notificação recebida, indicando se é uma atualização ou criação de recurso
  data: {
    id: string; // ID do pagamento ou merchant_order
  };
  attempts?: number; // Número de vezes que uma notificação foi enviada (apenas para o evento de entrega - delivery)
  received?: string; // Data de recebimento da notificação (apenas para o evento de entrega - delivery)
  resource?: ActionType; // Tipo de notificação recebida, indicando se é uma atualização ou criação de recurso (apenas para o evento de entrega - delivery)
  sent?: string; // Data de envio da notificação (apenas para o evento de entrega - delivery)
  topic?: string; // Tipo de notificação recebida (apenas para o evento de entrega - delivery)
}
function sleep(minutes: number) {
  return new Promise((resolve) => setTimeout(resolve, minutes * 1000));
}
export default async function Payment({ body }: any) {
  await sleep(10);
  try {
    console.log("Payment");
    const notification: WebhookNotification = body;
    console.log("notification.type: ", notification.type);
    switch (notification.type) {
      case NotificationType.Payment:
        console.log("payment created notification", notification);
        const paymentJson = await SearchPaymentId(notification.data.id);
        console.log("paymentJson: ", paymentJson.additional_info);
        const guess = (await SequelizeParse(
          db.Guess.findOne({
            where: { paymentId: paymentJson.id },
            include: [
              {
                model: db.Matches,
                as: "match",
              },
              {
                attributes: ["email", "pixKey", "permission", "pushToken"],
                model: db.Clients,
                as: "client",
              },
            ],
          })
        )) as any;
        if (!guess) {
          await sleep(20);
          Payment({ body });
          return;
        }
        guess.paymentJson = JSON.stringify(paymentJson);
        guess.paymentStatus = paymentJson.status;
        if (guess.paymentStatus === "approved") {
          console.log(guess);
          const guessUpdate = await db.Guess.update(guess, {
            where: { paymentId: paymentJson.id },
          });
          console.log("guessUpdate: ", guessUpdate);
          const message = `
Seu pagamento foi aprovado
Obrigado pelo palpite!
${guess.match.homeTeamName} x ${guess.match.awayTeamName}
${TransformDate(guess.match.matchDate)}
            `;
          const tokens = [guess.client.pushToken];
          console.log("tokens: ", tokens);
          pushNotification.send(tokens, {
            body: message,
            title: "Pagamento Aprovado!",
          });
        } else if (
          guess.paymentStatus === "rejected" ||
          guess.paymentStatus === "refunded"
        ) {
          const message = `
            Houve um erro no seu pagamento!
            ${guess.paymentJson.status_detail}
            `;
          const tokens = [guess.client.pushToken];
          pushNotification.send(tokens, {
            body: message,
            title: "Erro no pagamento",
          });
          const guessUpdate = await db.Guess.update(guess, {
            where: { paymentId: paymentJson.id },
          });
          console.log("guessUpdate: ", guessUpdate);
        }
        break;
    }
  } catch (error) {
    console.log(error);
  }
}

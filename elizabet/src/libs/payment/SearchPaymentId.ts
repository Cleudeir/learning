import Environment from "../../utils/Environment";
const fetch = require("node-fetch");
enum PaymentStatus {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
  Refunded = "refunded",
}

interface Payment {
  id: number;
  date_created: string;
  date_approved: string;
  date_last_updated: string;
  money_release_date: string;
  payment_method_id: string;
  payment_type_id: string;
  status: PaymentStatus;
  status_detail: string;
  currency_id: string;
  description: string;
  collector_id: number;
  payer: {
    id: number;
    email: string;
    identification: {
      type: string;
      number: number;
    };
    type: string;
  };
  metadata: Record<string, any>;
  additional_info: Record<string, any>;
  transaction_amount: number;
  transaction_amount_refunded: number;
  coupon_amount: number;
  transaction_details: {
    net_received_amount: number;
    total_paid_amount: number;
    overpaid_amount: number;
    installment_amount: number;
  };
  installments: number;
  card: Record<string, any>;
}
export default async function SearchPaymentId(id: string): Promise<Payment> {
  const accessToken = Environment.get("PAYMENTACCESSTOKEN");

  try {
    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data: Payment = await response.json();
    return data;
  } catch (error) {
    // Handle any errors
    console.error(error);
    return null;
  }
}

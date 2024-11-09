import {backEndUrl} from '../../../../env';

export default async function checkout(
  email: string,
  accessToken: string,
): Promise<string> {
  const urlCheckOut = 'https://api.mercadopago.com/checkout/preferences';
  const response = await fetch(urlCheckOut, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      items: [
        {
          title: 'Palpite',
          quantity: 1,
          unit_price: 5, // Replace with your product price
          currency_id: 'BRL',
        },
      ],
      // payer: {email: email},
      payment_methods: {
        excluded_payment_types: [
          {id: 'ticket'},
          {id: 'debit_card'},
          {id: 'bank_transfer'},
        ],
        installments: 1,
      },
      back_urls: {
        success: 'success',
        failure: 'failure',
        pending: 'pending',
      },
      expires: true,
      auto_return: 'approved',
      date_of_expiration: new Date(Date.now() + 1000 * 60 * 60 * 24),
      external_reference: 'your-external-reference', // Replace with your external reference
      notification_url: `${backEndUrl}/payment/create`,
    }),
  });
  const data = await response.json();

  if (response.ok) {
    return data.init_point;
  } else {
    throw new Error(data.message || 'Failed to create MercadoPago checkout');
  }
}

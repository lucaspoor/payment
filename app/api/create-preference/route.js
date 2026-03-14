// SDK de Mercado Pago
import { MercadoPagoConfig, Preference, Order } from 'mercadopago';
// Agrega credenciales



const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN_PRODUCCION });

export async function POST() {

  const preference = new Preference(client);

  const result = await preference.create({
    body: {
      items: [
        {
          title: "Mi producto",
          quantity: 1,
          unit_price: 2000
        }
      ],
      back_urls: {
        success: "https://www.tu-sitio/success",
        failure: "https://www.tu-sitio/failure",
        pending: "https://www.tu-sitio/pending"
      },
      
      auto_return: "approved",
    }
  });

    return Response.json({
    id: result.id
  });
}

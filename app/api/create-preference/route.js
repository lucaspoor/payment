// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from "mercadopago";

// Inicializar cliente
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN_PRODUCCION,
});

export async function POST() {
  try {

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            title: "Mi producto",
            quantity: 1,
            unit_price: 2000,
            currency_id: "CLP" // ⚠️ IMPORTANTE para Chile
          }
        ],

        back_urls: {
          success: "https://tusitio.com/success",
          failure: "https://tusitio.com/failure",
          pending: "https://tusitio.com/pending"
        },

        auto_return: "approved",

        // recomendado en producción
        statement_descriptor: "MI TIENDA",

        // recomendado para evitar bloqueos
        payment_methods: {
          installments: 1
        }
      }
    });

    return Response.json({
      id: result.id
    });

  } catch (error) {
    console.error("MercadoPago error:", error);

    return Response.json(
      { error: "Error creando preferencia" },
      { status: 500 }
    );
  }
}
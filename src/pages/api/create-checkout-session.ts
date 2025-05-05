import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { items } = req.body;
    const origin =
      req.headers.origin ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            images: [
              item.imageUrl.startsWith("http")
                ? item.imageUrl
                : `${origin}${item.imageUrl}`,
            ],
          },
          unit_amount: item.price * 100, // Stripe expects amounts in cents
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error creating checkout session" });
  }
}

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // NOTE: For a real implementation, read cart items from the request body and create line items
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        // placeholder item
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Sample Comic' },
            unit_amount: 999
          },
          quantity: 1
        }
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout-cancel`
    });

    res.redirect(303, session.url);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Checkout failed' });
  }
}

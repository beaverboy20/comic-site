import Head from 'next/head';
import { useCart } from '../components/CartContext';
import Link from 'next/link';

export default function CartPage(){
  const { cart, removeFromCart, clearCart, total } = useCart();

  return (
    <>
      <Head>
        <title>Your Cart — Dark Panel Comics</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-gray-300">Your cart is empty. <Link href="/shop"><a className="text-dh-red">Shop comics</a></Link></div>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between bg-gray-900/20 p-4 rounded">
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-gray-300">Qty: {item.quantity}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="font-mono">${(item.price * item.quantity).toFixed(2)}</div>
                <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-400">Remove</button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between font-bold">
            <div>Total</div>
            <div className="font-mono">${total.toFixed(2)}</div>
          </div>

          <form action="/api/checkout_sessions" method="POST">
            <button type="submit" className="bg-dh-red text-white px-5 py-2 rounded">Checkout</button>
          </form>

          <button onClick={clearCart} className="text-sm text-gray-300">Clear cart</button>
        </div>
      )}
    </>
  );
}

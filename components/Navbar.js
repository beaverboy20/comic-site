import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartContext';

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="bg-gradient-to-b from-black/80 to-gray-900 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/"><a className="text-2xl font-bold text-white">Dark Panel</a></Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/"><a className="hover:text-dh-red">Home</a></Link>
          <Link href="/shop"><a className="hover:text-dh-red">Shop</a></Link>
          <Link href="/news"><a className="hover:text-dh-red">News</a></Link>
          <Link href="/about"><a className="hover:text-dh-red">About</a></Link>
          <Link href="/cart"><a className="ml-4 bg-gray-800 px-3 py-2 rounded">Cart ({cart.length})</a></Link>
        </nav>

        <button className="md:hidden text-gray-300" aria-label="Toggle navigation" onClick={() => setOpen(v => !v)}>
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-900/80 border-t border-gray-800">
          <div className="px-4 py-3 space-y-2">
            <Link href="/"><a className="block">Home</a></Link>
            <Link href="/shop"><a className="block">Shop</a></Link>
            <Link href="/news"><a className="block">News</a></Link>
            <Link href="/about"><a className="block">About</a></Link>
            <Link href="/cart"><a className="block">Cart ({cart.length})</a></Link>
          </div>
        </div>
      )}
    </header>
  );
}

import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }){
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('dh_cart');
      if (raw) setCart(JSON.parse(raw));
    } catch (e) { }
  }, []);

  useEffect(() => {
    try { localStorage.setItem('dh_cart', JSON.stringify(cart)); } catch (e) {}
  }, [cart]);

  function addToCart(item){
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p);
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function removeFromCart(id){
    setCart(prev => prev.filter(p => p.id !== id));
  }

  function clearCart(){ setCart([]); }

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(){
  return useContext(CartContext);
}

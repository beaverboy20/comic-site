import '../styles/globals.css';
import { CartProvider } from '../components/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-dh-black text-white">
        <Navbar />
        <main className="px-4 md:px-8 lg:px-16 py-8">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

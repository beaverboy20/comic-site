import Head from 'next/head';
import { useRouter } from 'next/router';
import { sampleComics } from '../../data/comics';
import { useCart } from '../../components/CartContext';
import Link from 'next/link';

export default function ComicPage(){
  const router = useRouter();
  const { id } = router.query;
  const comic = sampleComics.find(c => c.id === id) || sampleComics[0];
  const { addToCart } = useCart();

  return (
    <>
      <Head>
        <title>{comic.title} — Dark Panel Comics</title>
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img src={comic.image} alt={`${comic.title} cover`} className="w-full rounded shadow-lg" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{comic.title}</h1>
          <p className="text-sm text-gray-300 mb-4">{comic.description}</p>
          <div className="mb-4">
            <span className="text-2xl font-mono">${comic.price.toFixed(2)}</span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => addToCart(comic)} className="bg-dh-red px-4 py-2 rounded">Add to Cart</button>
            <Link href="/shop"><a className="text-gray-300">Back to shop</a></Link>
          </div>

          <div className="mt-12">
            <h3 className="font-semibold mb-2">Related</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sampleComics.slice(1,5).map(rc => (
                <Link key={rc.id} href={`/comics/${rc.id}`}><a className="block bg-gray-900/20 p-2 rounded text-center">{rc.title}</a></Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

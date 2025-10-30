import Head from 'next/head';
import Carousel from '../components/Carousel';
import ComicGrid from '../components/ComicGrid';
import { sampleComics } from '../data/comics';

export default function Home() {
  const featured = sampleComics.slice(0, 4);
  const recent = sampleComics.slice(0, 8);
  return (
    <>
      <Head>
        <title>Dark Panel Comics — Home</title>
      </Head>

      <section aria-labelledby="featured" className="mb-12">
        <h2 id="featured" className="sr-only">Featured</h2>
        <Carousel items={featured} />
      </section>

      <section aria-labelledby="recent" className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 id="recent" className="text-2xl font-bold">New & Trending</h3>
        </div>
        <ComicGrid items={recent} />
      </section>

      <section aria-labelledby="news" className="mb-12">
        <div className="bg-gray-900/30 p-6 rounded-lg">
          <h3 id="news" className="text-xl font-bold mb-3">Latest News</h3>
          <article className="space-y-2">
            <h4 className="font-semibold">Dark Panel announces limited editions</h4>
            <p className="text-sm text-gray-300">We’re launching signed limited editions for select titles. Sign up for the newsletter to get early access.</p>
          </article>
        </div>
      </section>
    </>
  );
}

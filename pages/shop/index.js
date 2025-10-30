import Head from 'next/head';
import ComicGrid from '../../components/ComicGrid';
import { sampleComics } from '../../data/comics';
import { useState } from 'react';

export default function Shop() {
  const [filter, setFilter] = useState('all');
  const items = sampleComics.filter(c => filter === 'all' ? true : c.genre === filter);
  const genres = ['all', ...new Set(sampleComics.map(c => c.genre))];

  return (
    <>
      <Head>
        <title>Shop — Dark Panel Comics</title>
      </Head>

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Shop</h1>
        <div>
          <label htmlFor="genre" className="sr-only">Filter by genre</label>
          <select id="genre" value={filter} onChange={e => setFilter(e.target.value)} className="bg-gray-800 text-white rounded px-3 py-2">
            {genres.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
      </div>

      <ComicGrid items={items} />
    </>
  );
}

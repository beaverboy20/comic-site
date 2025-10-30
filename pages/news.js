import Head from 'next/head';

export default function News() {
  return (
    <>
      <Head>
        <title>News — Dark Panel Comics</title>
      </Head>

      <h1 className="text-2xl font-bold mb-4">News</h1>
      <article className="bg-gray-900/20 p-6 rounded mb-4">
        <h2 className="font-semibold">New series launch</h2>
        <p className="text-sm text-gray-300">A fresh sci-fi noir series arrives this fall. Pre-orders open now.</p>
      </article>

      <article className="bg-gray-900/20 p-6 rounded">
        <h2 className="font-semibold">Convention signing schedule</h2>
        <p className="text-sm text-gray-300">Meet artists and writers at the show. Limited prints available.</p>
      </article>
    </>
  );
}

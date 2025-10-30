import Head from 'next/head';

export default function About(){
  return (
    <>
      <Head>
        <title>About — Dark Panel Comics</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">About Dark Panel Comics</h1>
      <p className="text-gray-300">We’re a boutique publisher focusing on cinematic, character-driven comics. Founded by fans, for fans.</p>
    </>
  );
}

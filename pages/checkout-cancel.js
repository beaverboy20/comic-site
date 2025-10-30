import Head from 'next/head';

export default function CheckoutCancel(){
  return (
    <>
      <Head>
        <title>Checkout canceled</title>
      </Head>
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold mb-4">Checkout canceled</h1>
        <p className="text-gray-300">Your cart is still available. Try checking out again or contact support.</p>
      </div>
    </>
  );
}

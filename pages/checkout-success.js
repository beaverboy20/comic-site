import Head from 'next/head';

export default function CheckoutSuccess(){
  return (
    <>
      <Head>
        <title>Thanks for your purchase</title>
      </Head>
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold mb-4">Payment successful</h1>
        <p className="text-gray-300">Thanks for supporting indie comics. Check your email for a receipt and shipping details.</p>
      </div>
    </>
  );
}

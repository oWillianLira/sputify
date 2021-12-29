import Head from 'next/head';
import Center from '../components/Center';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Sputify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-start">
        <Sidebar />
        <Center />
      </main>

      <div className="">{/* Player */}</div>
    </div>
  );
}

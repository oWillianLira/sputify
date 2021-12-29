import { getProviders, signIn } from 'next-auth/react';
import Head from 'next/head';

export default function Login({ providers }) {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-black">
      <Head>
        <title>Login</title>
      </Head>
      <img src="https://links.papareact.com/9xl" alt="Spotify Logo" className="w-52 mb-10" />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            className="bg-[#18d860] py-4 px-6 rounded-full text-white font-medium"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

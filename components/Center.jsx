import { ChevronDownIcon } from '@heroicons/react/outline';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { shuffle } from 'lodash';

const colors = [
  'from-indigo-500',
  'from-yellow-500',
  'from-green-500',
  'from-red-500',
  'from-cyan-500',
  'from-pink-500',
  'from-purple-500',
  'from-orange-500',
  'from-emerald-500',
];

export default function Center() {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

  return (
    <div className="flex-grow relative">
      <header className="absolute top-5 right-8 text-white">
        <div className="flex items-center space-x-3 bg-black opacity-90 hover:opacity-75 cursor-pointer rounded-full p-1 pr-2">
          <img src={session?.user.image} alt="Profile Picture" className="w-10 h-10 rounded-full" />
          <h2 className="">{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}></section>
    </div>
  );
}

import {
  HomeIcon,
  SearchIcon,
  CollectionIcon,
  FolderAddIcon,
  MicrophoneIcon,
  HeartIcon,
} from '@heroicons/react/outline';

import { signOut, useSession } from 'next-auth/react';

export default function Sidebar() {
  const { data: session, status } = useSession();

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-3">
        <button className="flex items-center space-x-2 hover:text-white" title="Homepage" onClick={() => signOut()}>
          <p>Log out</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white" title="Homepage">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white" title="Homepage">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white" title="Homepage">
          <CollectionIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white" title="Homepage">
          <FolderAddIcon className="h-5 w-5" />
          <p>New Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white" title="Homepage">
          <HeartIcon className="h-5 w-5 text-red-500" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white" title="Homepage">
          <MicrophoneIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlists ... */}
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
      </div>
    </div>
  );
}

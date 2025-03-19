import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#15202b] border-b border-gray-700 p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-[#1da1f2]">TweetClone</h1>
      <nav>
        <Link href="/"><a className="px-3 py-1 hover:bg-gray-800 rounded">Home</a></Link>
        <Link href="/profile"><a className="px-3 py-1 hover:bg-gray-800 rounded">Profile</a></Link>
        <Link href="/chat"><a className="px-3 py-1 hover:bg-gray-800 rounded">Chat</a></Link>
        <Link href="/analytics"><a className="px-3 py-1 hover:bg-gray-800 rounded">Analytics</a></Link>
        <Link href="/settings"><a className="px-3 py-1 hover:bg-gray-800 rounded">Settings</a></Link>
      </nav>
    </header>
  );
};

export default Header;
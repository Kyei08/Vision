import React from 'react';
import Feed from '../components/Feed';
import Trending from '../components/Trending';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex">
        <div className="flex-1 border-r border-gray-700">
          <Feed />
        </div>
        <aside className="w-1/3 p-4">
          <Trending />
        </aside>
      </main>
    </div>
  );
};

export default Home;
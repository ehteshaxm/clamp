import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-200'>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-16 flex'>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;

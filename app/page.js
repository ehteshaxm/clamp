import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel';
import Index from './components/Index';

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-200 pb-20'>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-16 flex items-start'>
        <Sidebar />
        <div className='w-1 border-r border-gray-300 mx-16 self-stretch'></div>
        <div className='w-full'>
          <Panel />
          <Index />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel/Panel';
import Index from './components/Index/Index';

const Home = () => {
  return (
    <div className='min-h-screen pb-20 bg-gray-200'>
      <Navbar />
      <div className='flex items-start mx-auto mt-16 max-w-7xl'>
        <Sidebar />
        <div className='self-stretch w-1 mx-16 border-r border-gray-300'></div>
        <div className='w-full'>
          <Panel />
          <Index />
        </div>
      </div>
    </div>
  );
};

export default Home;

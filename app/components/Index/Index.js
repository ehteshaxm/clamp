'use client';
import React from 'react';
import { Search } from 'react-ionicons';
import IndexCard from './IndexCard';
import { indexData } from '@/data';

const Index = () => {
  return (
    <section className='mt-10'>
      <h2 className='text-xl font-semibold'>Indexes</h2>
      <div className='flex items-center justify-between w-full mt-3'>
        <form class='flex items-center w-2/3 bg-white rounded-lg p-3'>
          <div class='relative w-full'>
            <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <Search width={'18px'} height={'18px'} />
            </div>
            <input
              type='text'
              id='simple-search'
              className='bg-gray-50 border border-gray-300 text-gray-900 focus:outline-black text-sm rounded-lg block w-full pl-10 p-2.5'
              placeholder='Search Index'
            />
          </div>
        </form>
      </div>
      <div className='mt-10'>
        <div class='grid grid-cols-3 gap-4 auto-rows-min'>
          {indexData.map((item) => (
            <IndexCard {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;

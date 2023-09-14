'use client';
import React from 'react';
import {
  CompassOutline,
  CardOutline,
  CashOutline,
  HourglassOutline,
  MedalOutline,
  MegaphoneOutline,
  GiftOutline,
  HelpCircleOutline,
  AddOutline,
  CopyOutline,
  OpenOutline,
} from 'react-ionicons';

const Sidebar = () => {
  return (
    <div className='p-6 bg-white rounded-lg shadow-2xl shadow-orange-300 w-72'>
      <div className='flex items-start'>
        <div className='mr-4 bg-orange-500 rounded-full w-14 h-14'></div>
        <div className=''>
          <p className='font-mono text-gray-800 text-md'>eth:0x71..ab88b</p>
          <p className='text-lg font-bold text-gray-800'>$17.45 USD</p>
          <div className='flex items-center mt-2'>
            <div className='p-2 mr-2 text-white bg-black rounded-full'>
              <AddOutline color={'#fff'} width={'15px'} height={'15px'} />
            </div>
            <div className='p-2 mr-2 text-white bg-black rounded-full'>
              <CopyOutline color={'#fff'} width={'15px'} height={'15px'} />
            </div>
            <div className='p-2 text-white bg-black rounded-full'>
              <OpenOutline color={'#fff'} width={'15px'} height={'15px'} />
            </div>
          </div>
        </div>
      </div>
      <hr className='my-7' />
      <div>
        <div className='flex items-center px-3 py-2 mb-1 transition bg-orange-400 rounded-xl hover:cursor-pointer'>
          <CompassOutline />
          <p className='ml-4 font-semibold'>Explore</p>
        </div>
        <div className='flex items-center px-3 py-2 mb-1 transition rounded-xl hover:bg-orange-100 hover:cursor-pointer'>
          <CashOutline />
          <p className='ml-4 font-semibold'>Assets</p>
        </div>
        <div className='flex items-center px-3 py-2 mb-1 transition rounded-xl hover:bg-orange-100 hover:cursor-pointer'>
          <CardOutline />
          <p className='ml-4 font-semibold'>Transactions</p>
        </div>
        <div className='flex items-center px-3 py-2 mb-1 transition rounded-xl hover:bg-orange-100 hover:cursor-pointer'>
          <MedalOutline />
          <p className='ml-4 font-semibold'>Rewards</p>
        </div>
        <div className='flex items-center px-3 py-2 mb-1 transition rounded-xl hover:bg-orange-100 hover:cursor-pointer'>
          <MegaphoneOutline />
          <p className='ml-4 font-semibold'>Referral</p>
        </div>
        <div className='flex items-center px-3 py-2 mb-1 transition rounded-xl hover:bg-orange-100 hover:cursor-pointer'>
          <HourglassOutline />
          <p className='ml-4 font-semibold'>Watchlist</p>
        </div>
      </div>
      <hr className='mt-7 mb-7' />
      <div className='p-3 text-white rounded-lg bg-neutral-900'>
        <div className='flex items-center m-2 rounded-xl'>
          <GiftOutline color={'#fff'} />
          <p className='ml-4 text-sm font-light'>What's New?</p>
        </div>
        <div className='flex items-center m-2 rounded-xl'>
          <HelpCircleOutline color={'#fff'} />
          <p className='ml-4 text-sm font-light'>Help Center</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

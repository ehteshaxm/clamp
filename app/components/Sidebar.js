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
  LinkOutline,
} from 'react-ionicons';

const Sidebar = () => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-2xl shadow-orange-300 w-72'>
      <div className='flex items-start'>
        <div className='bg-orange-500 w-14 h-14 rounded-full mr-4'></div>
        <div className=''>
          <p className='font-mono text-md text-gray-800'>eth:0x71..ab88b</p>
          <p className='font-bold text-lg text-gray-800'>$17.45 USD</p>
          <div className='flex items-center mt-2'>
            <div className='bg-black text-white p-2 rounded-full mr-2'>
              <AddOutline color={'#fff'} width={'15px'} height={'15px'} />
            </div>
            <div className='bg-black text-white p-2 rounded-full mr-2'>
              <CopyOutline color={'#fff'} width={'15px'} height={'15px'} />
            </div>
            <div className='bg-black text-white p-2 rounded-full'>
              <LinkOutline color={'#fff'} width={'15px'} height={'15px'} />
            </div>
          </div>
        </div>
      </div>
      <hr className='my-7' />
      <div>
        <div className='flex items-center px-3 py-2 mb-1 rounded-xl bg-orange-300'>
          <CompassOutline />
          <p className='font-semibold ml-4'>Explore</p>
        </div>
        <div className='flex items-center px-3 py-2 mb-1 rounded-xl hover:bg-orange-100'>
          <CashOutline />
          <p className='font-semibold ml-4'>Assets</p>
        </div>
        <div className='flex items-center px-3 py-2 mb-1 rounded-xl hover:bg-orange-100'>
          <CardOutline />
          <p className='font-semibold ml-4'>Transactions</p>
        </div>
        <div className='flex items-center px-3 py-2 mb-1 rounded-xl hover:bg-orange-100'>
          <MedalOutline />
          <p className='font-semibold ml-4'>Rewards</p>
        </div>
        <div className='flex items-center px-3 py-2 mb-1 rounded-xl hover:bg-orange-100'>
          <MegaphoneOutline />
          <p className='font-semibold ml-4'>Referral</p>
        </div>
        <div className='flex items-center px-3 py-2 mb-1 rounded-xl hover:bg-orange-100'>
          <HourglassOutline />
          <p className='font-semibold ml-4'>Watchlist</p>
        </div>
      </div>
      <hr className='mt-7 mb-7' />
      <div className='bg-neutral-900 rounded-lg p-3 text-white'>
        <div className='flex items-center m-2 rounded-xl'>
          <GiftOutline color={'#fff'} />
          <p className='text-sm font-light ml-4'>What's New?</p>
        </div>
        <div className='flex items-center m-2 rounded-xl'>
          <HelpCircleOutline color={'#fff'} />
          <p className='text-sm font-light ml-4'>Help Center</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

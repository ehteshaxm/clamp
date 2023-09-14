'use client';
import React from 'react';
import {
  PaperPlaneOutline,
  InformationCircle,
  ChevronForwardOutline,
  ArrowDownOutline,
  AddCircle,
} from 'react-ionicons';

const Actions = () => {
  return (
    <div className='w-1/2 box-border'>
      <h2 className='font-semibold text-xl'>Actions</h2>
      <div className='mt-2'>
        <div className='bg-white hover:bg-gray-100 transition cursor-pointer rounded-lg shadow-2xl p-3 px-6 mt-3 flex justify-between items-center'>
          <div className='flex items-center'>
            <PaperPlaneOutline />
            <p className='ml-6'>Send</p>
          </div>
          <p className='font-semibold text-sm text-gray-500'>12</p>
        </div>
        <div className='bg-white hover:bg-gray-100 transition cursor-pointer rounded-lg shadow-2xl p-3 px-6 mt-3 flex justify-between items-center'>
          <div className='flex items-center'>
            <ArrowDownOutline />
            <p className='ml-6'>Receive</p>
          </div>
          <p className='font-semibold text-sm text-gray-500'>37</p>
        </div>
        <div className='bg-white hover:bg-gray-100 transition cursor-pointer rounded-lg shadow-2xl p-3 px-6 mt-3 flex justify-between items-center'>
          <div className='flex items-center'>
            <AddCircle />
            <p className='ml-6'>Fund Wallet</p>
          </div>
          <p className='font-mono text-sm text-gray-500'>eth:0.0066</p>{' '}
        </div>
        <div className='bg-white hover:bg-gray-100 transition cursor-pointer rounded-lg shadow-2xl p-3 px-6 mt-3 flex justify-between items-center'>
          <div className='flex items-center'>
            <InformationCircle />
            <p className='ml-6'>Tutorial</p>
          </div>
          <p className='font-semibold text-sm text-gray-500'>
            {<ChevronForwardOutline />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Actions;

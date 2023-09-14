import React from 'react';

const Overview = () => {
  return (
    <div className='w-1/2 mr-7'>
      <h2 className='text-xl font-semibold'>Overview</h2>
      <div className='w-full p-6 mt-2 bg-white rounded-lg shadow-2xl'>
        <div className='flex items-start justify-between'>
          <div>
            <div className='w-20 h-20 mr-4 bg-orange-500 rounded-full'></div>
            <p className='mt-2 font-mono text-gray-800 text-md'>
              eth:0x71..ab88b
            </p>
          </div>
          <div>
            <div className='p-2 py-1 text-sm font-medium text-white bg-purple-500 rounded-lg'>
              Polygon
            </div>
          </div>
        </div>
        <div className='flex items-end justify-between mt-7'>
          <div className='flex items-end'>
            <div className='mr-5'>
              <p className='text-sm font-medium text-gray-500'>Tokens</p>
              <p className='text-xl font-bold leading-tight'>15</p>
            </div>
            <div className='mr-5'>
              <p className='text-sm font-medium text-gray-500'>Indexes</p>
              <p className='text-xl font-bold leading-tight'>4</p>
            </div>
          </div>
          <button className='px-4 py-2 text-sm text-white transition bg-black rounded-lg hover:bg-neutral-700'>
            View Assets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;

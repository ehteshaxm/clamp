import React from 'react';

const Overview = () => {
  return (
    <div className='w-1/2 mr-7'>
      <h2 className='font-semibold text-xl'>Overview</h2>
      <div className='w-full bg-white rounded-lg shadow-2xl p-6 mt-2'>
        <div className='flex justify-between items-start'>
          <div>
            <div className='bg-orange-500 w-20 h-20 rounded-full mr-4'></div>
            <p className='font-mono text-md text-gray-800 mt-2'>
              eth:0x71..ab88b
            </p>
          </div>
          <div>
            <div className='rounded-lg p-2 py-1 bg-purple-500 text-sm font-medium text-white'>
              Polygon
            </div>
          </div>
        </div>
        <div className='flex justify-between items-end mt-7'>
          <div className='flex items-end'>
            <div className='mr-5'>
              <p className='text-gray-500 font-medium text-sm'>Tokens</p>
              <p className='text-xl font-bold leading-tight'>15</p>
            </div>
            <div className='mr-5'>
              <p className='text-gray-500 font-medium text-sm'>Indexes</p>
              <p className='text-xl font-bold leading-tight'>4</p>
            </div>
          </div>
          <button className='bg-black hover:bg-neutral-700 transition text-white py-2 px-4 text-sm rounded-lg'>
            View Assets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;

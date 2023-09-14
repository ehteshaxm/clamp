import React from 'react';
import Overview from './Overview';
import Actions from './Actions';

const Panel = () => {
  return (
    <div className='flex w-full'>
      <Overview />
      <Actions />
    </div>
  );
};

export default Panel;

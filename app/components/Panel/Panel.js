import React from 'react';
import Overview from './Overview';
import Actions from './Actions';

const Panel = () => {
  return (
    <section className='flex w-full'>
      <Overview />
      <Actions />
    </section>
  );
};

export default Panel;

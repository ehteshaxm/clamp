import React from 'react';
import { HeartOutline, CaretUp, CaretDown } from 'react-ionicons';
import IndexModal from './IndexModal';
import { useDisclosure } from '@chakra-ui/react';

export const colorMap = {
  USDC: 'bg-blue-100',
  WETH: 'bg-red-100',
  WMATIC: 'bg-purple-100',
  WBTC: 'bg-orange-100',
  DAI: 'bg-amber-100',
};

const IndexCard = ({ tokens, priceChange, up }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div class='bg-white rounded-lg overflow-hidden'>
      <IndexModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        tokens={tokens}
        stampColorMap={colorMap}
      />
      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold'>{`${tokens[0]}-${tokens[1]}`}</h2>
          <HeartOutline />
        </div>
        <div className='flex items-center justify-between mt-5'>
          <div className='flex flex-col items-start'>
            <div
              className={`flex items-center p-1 px-2 mb-1 ${
                colorMap[tokens[0]]
              } rounded-full`}
            >
              <img src={`/tokens/${tokens[0]}.svg`} className='w-5 mr-1' />
              <p className='text-xs font-medium'>{tokens[0]}</p>
            </div>
            <div
              className={`flex items-center p-1 px-2 ${
                colorMap[tokens[1]]
              } rounded-full`}
            >
              <img src={`/tokens/${tokens[1]}.svg`} className='w-5 mr-1' />
              <p className='text-xs font-medium'>{tokens[1]}</p>
            </div>
          </div>
          <div>
            <p className='mb-1 text-xs text-right text-gray-500'>
              Price Change <br /> (in 24hrs)
            </p>
            <div className='flex items-start'>
              {up && <CaretUp color={'#84cc16'} />}
              {!up && <CaretDown color={'#ef4444'} />}
              <p className='ml-1 text-xl font-bold'>{priceChange}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={onOpen}
        className='w-full p-3 text-sm text-white transition bg-black hover:bg-neutral-700'
      >
        View Details
      </button>
    </div>
  );
};

export default IndexCard;

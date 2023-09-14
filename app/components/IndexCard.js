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
          <h2 className='font-semibold text-lg'>{`${tokens[0]}-${tokens[1]}`}</h2>
          <HeartOutline />
        </div>
        <div className='mt-5 flex justify-between items-center'>
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
            <p className='text-xs text-gray-500 mb-1 text-right'>
              Price Change <br /> (in 24hrs)
            </p>
            <div className='flex items-start'>
              {up && <CaretUp color={'#84cc16'} />}
              {!up && <CaretDown color={'#ef4444'} />}
              <p className='ml-1 font-bold text-xl'>{priceChange}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={onOpen}
        className='bg-black w-full text-white p-3 text-sm hover:bg-neutral-700 transition'
      >
        View Details
      </button>
    </div>
  );
};

export default IndexCard;

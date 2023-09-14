import React from 'react';
import { HeartOutline, CaretUp, CaretDown } from 'react-ionicons';
import IndexModal from './IndexModal';
// import { useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const IndexCard = ({ tokens, priceChange, up }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div class='bg-white rounded-lg overflow-hidden'>
      <Modal onClose={onClose} size={'lg'} isOpen={isOpen} isCentered>
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          // backdropInvert='80%'
          backdropBlur='5px'
        />
        <ModalContent
          borderWidth='1px'
          borderColor='gray.100'
          p={3}
          borderRadius={'20px'}
        >
          <ModalHeader>
            <Stack
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <h2 className='text-xl'>Index</h2>
              <div className='flex items-center'>
                <div className='flex items-center p-1 px-2 mr-1 bg-red-100 rounded-full'>
                  <img src={`/tokens/${tokens[0]}.svg`} className='w-5 mr-1' />
                  <p className='text-xs font-medium'>{tokens[0]}</p>
                </div>
                <div className='flex items-center p-1 px-2 bg-orange-100 rounded-full'>
                  <img src={`/tokens/${tokens[1]}.svg`} className='w-5 mr-1' />
                  <p className='text-xs font-medium'>{tokens[1]}</p>
                </div>
              </div>
            </Stack>
          </ModalHeader>
          <ModalBody overflow={'hidden'} mt={5}>
            <ResponsiveContainer height={150} width='100%'>
              <LineChart data={data}>
                <YAxis orientation='right' />
                <Tooltip />
                <Line
                  type='monotone'
                  dataKey='pv'
                  stroke='#ef4444'
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
                <Line
                  type='monotone'
                  dataKey='uv'
                  stroke='#f59e0b'
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <h2 className='font-semibold text-lg'>{`${tokens[0]}-${tokens[1]}`}</h2>
          <HeartOutline />
        </div>
        <div className='mt-5 flex justify-between items-center'>
          <div>
            {/* <p className='text-xs text-gray-500 mb-1'>Tokens</p> */}
            <div>
              <div className='flex items-center p-1 px-2 mb-1 bg-red-100 rounded-full'>
                <img src={`/tokens/${tokens[0]}.svg`} className='w-5 mr-1' />
                <p className='text-xs font-medium'>{tokens[0]}</p>
              </div>
              <div className='flex items-center p-1 px-2 bg-orange-100 rounded-full'>
                <img src={`/tokens/${tokens[1]}.svg`} className='w-5 mr-1' />
                <p className='text-xs font-medium'>{tokens[1]}</p>
              </div>
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

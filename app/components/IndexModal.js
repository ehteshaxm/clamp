import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Stack,
  Input,
  Select,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData as data } from '@/data';

export const colorMap = {
  USDC: '#0ea5e9',
  WETH: '#dc2626',
  WMATIC: '#a855f7',
  WBTC: '#f97316',
  DAI: '#f59e0b',
};

const IndexModal = ({ onClose, isOpen, tokens, stampColorMap }) => {
  const [token, setToken] = useState('WMATIC');
  const [firstTokenProportion, setFirstTokenProportion] = useState(50);
  const [secondtokenProportion, setSecondTokenProportion] = useState(50);

  const [amount, setAmount] = useState(null);

  function handleProprtionChange(e, which) {
    const newVal = parseInt(e.target.value.split('%')[0]);

    if (newVal > 100) {
      return;
    }

    if (isNaN(newVal)) {
      setFirstTokenProportion(0);
      setSecondTokenProportion(0);
    } else if (which === 'first') {
      setFirstTokenProportion(newVal);
      setSecondTokenProportion(100 - newVal);
    } else {
      setSecondTokenProportion(newVal);
      setFirstTokenProportion(100 - newVal);
    }
  }

  return (
    <Modal onClose={onClose} size={'md'} isOpen={isOpen} isCentered>
      <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='10px' />
      <ModalContent
        borderWidth='1px'
        borderColor='gray.100'
        p={3}
        py={5}
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
              <div
                className={`flex items-center p-1 px-2 mr-1 ${
                  stampColorMap[tokens[0]]
                } rounded-full`}
              >
                <img src={`/tokens/${tokens[0]}.svg`} className='w-5 mr-1' />
                <p className='text-xs font-medium'>{tokens[0]}</p>
              </div>
              <div
                className={`flex items-center p-1 px-2 ${
                  stampColorMap[tokens[1]]
                } rounded-full`}
              >
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
                stroke={colorMap[tokens[0]]}
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
              <Line
                type='monotone'
                dataKey='uv'
                stroke={colorMap[tokens[1]]}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <hr className='my-10' />
          <div>
            <div className='flex justify-between items-center'>
              <FormControl marginRight={5}>
                <FormLabel fontSize={14} marginBottom={1}>
                  Enter Amount (in $)
                </FormLabel>
                <Input
                  value={amount}
                  type='number'
                  onChange={(e) => setAmount(e.target.value)}
                  fontSize={14}
                  focusBorderColor='black'
                  placeholder='Enter Amount'
                />
              </FormControl>{' '}
              <FormControl>
                <FormLabel
                  display={'flex'}
                  alignItems={'start'}
                  fontSize={14}
                  marginBottom={1}
                >
                  Token
                  <img src={`/tokens/${token}.svg`} className='w-5 ml-2' />
                </FormLabel>
                <Select
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  fontSize={14}
                  focusBorderColor='black'
                >
                  <option value='WMATIC'>WMATIC</option>
                  <option value='WETH'>WETH</option>
                  <option value='USDC'>USDC</option>
                </Select>
              </FormControl>
            </div>
            <div className='mt-6'>
              <div className='rounded-lg bg-gray-50 border p-5'>
                <div className='flex justify-between items-center'>
                  <div className='w-1/2 flex flex-col justify-start items-center'>
                    <div className='flex items-center p-3 pb-1 pt-0 px-0 mr-1'>
                      <img
                        src={`/tokens/${tokens[0]}.svg`}
                        className='w-7 mr-2'
                      />
                      <p className='text-md font-medium'>{tokens[0]}</p>
                    </div>
                    <Input
                      value={firstTokenProportion + '%'}
                      onChange={(e) => {
                        handleProprtionChange(e, 'first');
                      }}
                      width={'75%'}
                      textAlign={'center'}
                      focusBorderColor='#f9fafb'
                      fontWeight={'bold'}
                      fontSize={30}
                      textColor='black'
                      border='none'
                      marginTop={0}
                    />
                    <p className='mt-2 font-mono text-sm'>1.02230</p>
                  </div>
                  <div className='w-5 border border-b border-gray-400'></div>
                  <div className='w-1/2 flex flex-col justify-start items-center'>
                    <div className='flex items-center p-3 pb-1 pt-0 px-0 mr-1'>
                      <img
                        src={`/tokens/${tokens[1]}.svg`}
                        className='w-7 mr-2'
                      />
                      <p className='text-md font-medium'>{tokens[1]}</p>
                    </div>
                    <Input
                      value={secondtokenProportion + '%'}
                      onChange={(e) => {
                        handleProprtionChange(e, 'second');
                      }}
                      width={'75%'}
                      textAlign={'center'}
                      focusBorderColor='#f9fafb'
                      fontWeight={'bold'}
                      fontSize={30}
                      textColor='black'
                      border='none'
                      marginTop={0}
                    />
                    <p className='mt-2 font-mono text-sm'>1.02230</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <div className='flex justify-between items-end'>
                <div className='w-1/2'>
                  <FormControl marginRight={5}>
                    <FormLabel fontSize={14} marginBottom={1}>
                      You pay (in ${token})
                    </FormLabel>
                    <div className='flex items-center p-1 px-2 mt-1'>
                      <img src={`/tokens/${token}.svg`} className='w-5 mr-2' />
                      <p className='text-sm font-medium'>
                        {(amount * 1.9).toFixed(2)}
                      </p>
                    </div>
                  </FormControl>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                  <button className='border hover:bg-red-600 transition text-bl ack hover:text-white py-3 px-4 mr-2 text-sm rounded-full font-semibold'>
                    Reset
                  </button>
                  <button className='bg-black hover:bg-neutral-700 transition text-white py-3 px-4 text-sm rounded-full font-semibold'>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default IndexModal;

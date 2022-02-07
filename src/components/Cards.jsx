import { ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
        <div className='relative top-0 left-0  w-full h-96 mt-24  bg-[#fbfffa99]'>
            <div className='flex gap-10 absolute px-24   h-80 text-gray-700 leading-5'>
                <Card uri='assets/img/small fidel.png'
                header='Vision'
                text='To be number one in every market we serve and for every branded product we offer.' 
                />
                <Card uri='assets/img/small fidel.png'
                header='Mission'
                text='To make financial services easy and accessible to our customers.' 
                /> 
                <Card uri='assets/img/small fidel.png'
                header='Core Values'
                list={<ul className='my-4'>
                        <li className='flex'>C<ChevronRightIcon className='icon'/>Customer First</li>
                        <li className='flex'>R<ChevronRightIcon className='icon'/>Respect</li>
                        <li className='flex'>E<ChevronRightIcon className='icon'/>Excellence</li>
                        <li className='flex'>S<ChevronRightIcon className='icon'/>Shared Ambition</li>
                        <li className='flex'>T<ChevronRightIcon className='icon'/>Tenacity</li>
                    </ul>} 
                 />
            </div>
        </div>
  );
};

export default Cards;

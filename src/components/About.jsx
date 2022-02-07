import React from 'react';
import {  ArrowUpIcon} from "@heroicons/react/outline"

const About = () => {
  return (
  <div className=' h-40 w-full font-body mt-10 top-24 left-0 right-0 relative'>
    <div className='px-24 w-full flex absolute'>
    <div className='p-2 w-9/12'>
        <p className='block p-2 font-bold font-body text-sm subpixel-antialiased'>ABOUT US</p>
        <h2 className=' block mt-4 text-blue-900 font-semibold font-body subpixel-antialiased text-3xl'>Welcome to Fidelity Bank</h2>
        <div className='w-[3.75rem] h-0.5 bg-blue-900 my-8'></div>
    </div>
    <div className='bg-lime-50 shadow-xl w-3/12 p-2.5 h-40'>
      <div className=' px-5 '>
        <div className='flex gap-3 text-sm text-gray-500 mt-2'>
          <img src="assets/img/ng.jpg" alt="Nigria flag" className='h-4 w-8' />
          <span>NSE</span>
        </div>
        <div className='flex gap-3 my-5 font-bold text-gray-900 text-xl'>
          <h1 className=''>NGN</h1>
          <span>2.65</span>
        </div>
        <div className='flex mt-10 text-gray-500 text-sm justify-between '>
          <span className='flex gap-2 pr-2'>
            1.92%
            <ArrowUpIcon className='w-4 h-4 text-green-900 mt-1'/>
          </span>
          <span className='px-2'>17/01/22</span>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default About;

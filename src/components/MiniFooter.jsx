import { BriefcaseIcon, CurrencyDollarIcon, HomeIcon } from '@heroicons/react/outline';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import React from 'react';
import NavLink from './NavLink';

const MiniFooter = () => {
    return (
    <div className='w-full h-[25rem] relative top-0 left-0 font-body text-sm'>
        <div className='mx-24 absolute flex gap-5'>
            <div className='trinity medium'>
            <NavLink icon={<CurrencyDollarIcon className='logo'/>} header='Investor Relations' text='Stay in touch with our financial report and keep track of our progressive journey.'/>
            <div className=' mt-4 '>
                    <button className='btn btn-background-slide text-blue-900 font-normal text-base'>
                        Learn More
                        <ArrowSmRightIcon className='h-5 w-5 mt-0.5 ml-0.5 text-blue-900 fill-blue-900'/>
                        </button>
                </div>
            </div>
            <div className='trinity medium'>
            <NavLink icon={<HomeIcon className='logo'/>} header='CSR' text='We are building stable and prosperous communities that help shape the future'/>
            <div className='mt-4 text-blue-900 '>
            <div className=' mt-4 '>
                    <button className='btn btn-background-slide text-blue-900 font-normal text-base'>
                        Learn More
                        <ArrowSmRightIcon className='h-5 w-5 mt-0.5 ml-0.5 text-blue-900 fill-blue-900'/>
                        </button>
                </div>
                </div>
            </div>
            <div className='trinity medium'>
            <NavLink icon={<BriefcaseIcon className='logo'/>} header='Careers' text='Begin your journey to evergreen opportunities at Fidelity'/>
            <div className='mt-4 '>
            <div className=' mt-4 '>
                    <button className='btn btn-background-slide text-blue-900 font-normal text-base'>
                        Openings
                        <ArrowSmRightIcon className='h-5 w-5 mt-0.5 ml-0.5 text-blue-900 fill-blue-900'/>
                        </button>
                </div>
                </div>
            </div>
           
        </div>
    </div>
    );
};

export default MiniFooter;

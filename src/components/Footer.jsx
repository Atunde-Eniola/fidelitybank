import React from 'react';
import {  XIcon } from '@heroicons/react/outline';
import {  ArrowSmRightIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='w-full h-[21.9rem] mx-auto mt-8 text-gray-500 font-body text-[13.3px]  right-0 top-0 relative'>
            <div className=' w-full h-full '>
        <div className='couple h-36 w-full top-8 left-0  text-center '>
            
            <div className='bg-gradient-to-r from-blue-900 to-blue-900 middle w-full h-full'>
                
                <div className='flex-1 pr-10 pl-1'>
                <h2 className='text-white  font-medium text-3xl font-latest'>Stay Close, We Are Always Here</h2>
                </div>
                <div className='flex-1 middle m-6 p-4 '>
                    <button className='btn btn-background-slide text-white font-normal text-base'>
                        Get In Touch
                        <ArrowSmRightIcon className='h-6 w-6 mt-0.5 ml-0.5 text-white fill-white'/>
                        </button>
                </div>
            </div>
            
        </div>
        <div className='pt-8   bg-gray-50 '>
         <div className='flex gap-x-10  justify-center  '>
            <div className='mx-4 py-2'>
                <span className='bottom'>Banking</span>
                <ul className='font-medium'>
                    <li className='my-1 list-style'>
                        <Link to='/personalbanking'>Personal Banking</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/sme' >SME Banking</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/digitalbanking'>Digital Banking</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/corporatebanking'>Corporate Banking</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/privatebanking'>Private Banking</Link>
                    </li>
                    <li className='my-1 cursor-pointer hover:text-blue-900'>
                        <Link to='/diasporabnking'>Diaspora Banking</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/agricbanking'>Agric & Export Banking</Link>
                    </li>
                </ul>
            </div>
            <div className='mx-4 py-2'>
                <span className='bottom'>About Fidelity</span>
                <ul className='cursor-pointer'>
                    <li className='my-1 list-style'>
                        <Link to='/aboutus'>About Us</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/careers'>Careers</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/investorrelation'>Investor Relations</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/csr'>CSR</Link>
                    </li>
                </ul>
            </div>
            <div className='mx-4 py-2'>
                <span className='bottom'>Help & Support</span>
                <ul className='cursor-pointer'>
                    <li className='my-1 list-style'>
                        <Link to='/trueservice'>True Service</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/gaq'>FAQ</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/finfbranch'>Find a Branch</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/whistleblowing'>Whistle Blowing</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/infomationsecurity'>Information Security</Link>
                    </li>
                </ul>
            </div>
            <div className='mx-4 py-2'>
                <span className='bottom'>Quick Links</span>
                <ul className='cursor-pointer'>
                    <li className='my-1 list-style'>
                        <Link to='/onlinebanking'>Online Banking</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/loancalculator'>Loan Calculator</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/media'>Media</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/suspectedforeign'>Suspected Foreign</Link>
                    </li>
                    <li className='my-1 list-style'>
                        <Link to='/exchangeracketeers'>Exchange Racketeers</Link>
                    </li>
                </ul>
            </div>
            <div className=' py-2 mx-4'>
            <span className='bottom'>Digital Channels</span>
            <div className='grid grid-cols-2 gap-x-4 gap-y-5 cursor-pointer'>
                <img src="assets/img/okay-1.jpg" alt="apple store" className='footer-digital '/>
                <img src="assets/img/okay-2.jpg" alt="apple store" className='footer-digital'/>
                <img src="assets/img/okay-1.jpg" alt="google app" className='footer-digital'/>
                <img src="assets/img/okay-2.jpg" alt="google app" className='footer-digital'/>
            </div>
            </div>
        </div> 
        <div className=' ml-14 text-sm pt-6 pb-8 justify-center flex  text-gray-700 '>
        <p className='font-normal antialiased'>RC 103022. Copyright 2022 Fidelity Bank Plc. An authorised financial services and credit provider.</p>
        <div>
        <ul className='flex justify-content cursor-pointer'>
            <li className='px-1.5 border-r-2 border-gray-400 hover:text-red-500'><Link to='/privacy'>Privacy Policy</Link></li>
            <li className='px-1.5 border-r-2 border-gray-400 hover:text-red-500'><Link to='/communication'>Communication Policy</Link></li>
            <li className='px-1.5 border-r-2 border-gray-400 hover:text-red-500'><Link to='termsandconditions'>Terms And Conditions</Link></li>
            <li className='px-1.5 hover:text-red-500'><Link to='/sitemap'>Sitemap</Link></li>
        </ul>
        </div>
        </div>
        </div>
        <div className='bg-zinc-900 h-16 w-full font-latest px-4 text-white font-medium  middle'>
            <div className='middle mr-10 py-1 relative'>
            <p>This website uses cookies to provide you with the best browsing experience.<br /> Find out more or adjust your</p>
            <div className='underline absolute right-[50%] top-6 hover:text-blue-900'><Link to='/settings'>settings</Link></div>
            </div>
            <div className='flex mr-3'>
            <button className=' btn-end bg-blue-900 hover:text-blue-900'>Accept</button>
            <button className='border border-gray-400 btn-end text-gray-400 hover:text-gray-800'>Settings</button>
            <div className='h-10 w-10 border ml-2 border-gray-400 rounded-full hover:bg-white hover:text-black'>
            <span className=' middle m-2 '>
                <XIcon className='h-5 w-5 text-gray-400' />
            </span>
            </div>
            </div>
        </div>
        </div>
        
        </div>
    );
};

export default Footer;


// right-[63%]  top-8
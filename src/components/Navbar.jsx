import React from 'react';
import {  SearchIcon, ShoppingBagIcon } from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"
import { Link } from 'react-router-dom';
import  Button  from '../components/Button';

const Navbar = () => {
  return (
    <div className=" bg-white  h-16 w-full  fixed top-0 left-0 right-0 z-50">
    <div className="px-16  h-16 w-full flex items-center ">
      <div className='flex'>
        <Button text='ONLINE BANKING'
         icon={<ShoppingBagIcon className="w-4 h-4 ml-1"/>}
          />
          <Button text='OPEN AN ACCOUNT' type="secondary"/>
      </div>
      <ul className=" w-2/4 list font-bold text-gray-500">
        <li className="px-2.5  list-style"><HomeIcon className=" w-4 h-4 text-gray-700"/></li>
        <li className="px-2.5  list-style "><Link to="/#">About Us</Link></li>
        <li className="px-2.5  list-style"><Link to="#">Investor Relations</Link></li>
        <li className="px-2.5  dropdown relative inline list-style"><Link to="# ">Agric & Exports</Link>
        <div className='dropdown-menu absolute h-auto hidden  '>
          <ul className=' w-36 dropdown-list bg-white rounded-md shadow-sm '>
            <li className='py-4 px-8 list-style'><Link to='#'>Fideliy EPM</Link></li>
            <li className='py-4 px-8 list-style'><Link to='#'>Gallery</Link></li>
          </ul>
        </div>
        </li>
        <li className="px-2.5  dropdown relative inline list-style"><Link to="#">CSR
        </Link>
        <div className='dropdown-menu absolute h-auto hidden  '>
          <ul className=' w-52 dropdown-list bg-white rounded-md shadow-sm'>
            <li className='py-4 px-8 list-style'><Link to='#'>Health & Social Welfare</Link>
            </li>
            <li className='py-4 px-8 list-style'><Link to='#'>Education</Link></li>
            <li className='py-4 px-8 list-style'><Link to='#'>Youth Empowerment</Link></li>
            <li className='py-4 px-8 list-style'><Link to='#'>Environment</Link>
            </li>
            <li className='py-4 px-8 list-style'><Link to='#'>Sustainability
            </Link></li>
          </ul>
        </div>
        </li>
        <li className="px-2.5   dropdown realtive inline list-style"><Link to="#">Media
        </Link>
        <div className='dropdown-menu absolute h-auto hidden  '>
          <ul className=' w-48 dropdown-list bg-white rounded-md shadow-sm'>
            <li className='py-4 px-8 list-style'><Link to='#'>Media Center</Link></li>
            <li className='py-4 px-8 list-style'><Link to='#'>Gallery</Link></li>
            <li className='py-4 px-8 list-style'><Link to='#'>Magazine Publication</Link></li>
            <li className='py-4 px-8 list-style'><Link to='#'>Blog</Link></li>
          </ul>
        </div>
        </li>
        <li className="px-2.5 dropdown relative inline list-style">
          <Link to="#">Contact</Link>
        <div className='dropdown-menu absolute h-auto hidden  '>
          <ul className=' w-52 dropdown-list bg-white rounded-md shadow-sm'>
            <li className='py-4 px-8 list-style'><Link to='#'>True Server</Link></li>
            <li className='py-4 px-8 list-style'><Link to='#'>Branch Locator</Link></li>
            <li className='py-4 px-8 list-style'><Link to='#'>Careers</Link></li>
            <li className='py-4 px-8 list-style'><Link to='#'>Shareholder Enquiry</Link></li>
            <li className='py-4 px-8 list-style'><Link to='#'>Information Security</Link></li>
            <li className='py-4 px-8 list-style'><Link to='#'>Whistle Blowing</Link></li>
          </ul>
        </div>
        </li>
        <li className="px-9  cursor-pointer"><SearchIcon className=" w-4 h-4 text-gray-700"/></li>
      </ul>
      <img src="/assets/img/small-fidel-copy2.jpg" alt="fidelity logo" className=" ml-20 mr-18 "/>
    </div>
    <div className='bg-gray-50 h-8 w-full '>
        <div className='w-2/3 h-8 mx-16 px-2 flex items-center'>
            <ul className="list text-gray-900 antialised font-semibold ">
                <li className='px-3.5 dropdown relative inline '>
                  <Link to='/personal-banking'>Personal Banking</Link>
                  <div className='dropdown-sub-menu absolute  hidden  '>
                    <div className='flex w-[750px] bg-gray-50 justify-between shadow-sm   h-80 rounded-md'>
                    <span className='left-10 dropdown-header'>Personal Banking</span>
                    <ul className='  dropdown-list pt-12 '>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Savings Account</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Current Account</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Diaspora Banking</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Investment Service</Link></li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Personal Loan</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Money Transfer</Link>
                      </li>
                    </ul>
                    <span className=' left-60 dropdown-header'>Self Service</span>
                    <ul className='  dropdown-list pt-12 mr-4'>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Find a Branch</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Loan Calculator</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Open Account</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>True Server</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Chat with Ivy</Link>
                      </li>
                      </ul>
                      <img src="assets/img/fidelity-7.jpg" alt="bank-ad" className='h-52 w-60 my-8 mx-14'/>
                    </div>
                  </div>
                </li>
                <li className='px-3.5 dropdown relative inline'>
                  <Link to='#'>Digital Banking</Link>
                <div className='dropdown-sub-menu absolute hidden  '>
                    <div className='flex w-[750px] bg-gray-50 justify-between shadow-sm   h-80 rounded-md'>
                    <span className='dropdown-header left-10'>Digital Banking</span>
                    <ul className='  dropdown-list pt-12 '>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Instant Banking (*770#)</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Fidelity Cards</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Fidelity Collections</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Online Banking</Link></li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Online Banking Mobile App</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>
                          <img src="assets/img/okay-3.jpg" alt="bank-ad" className='py-1.5'/>
                          <img src="assets/img/okay-4.jpg" alt="bank-ad" className='py-1.5'/>
                          </Link>
                      </li>
                    </ul>
                    <span className='dropdown-header left-[18.5rem] '>Self Service</span>
                    <ul className='  dropdown-list pt-12 mr-4'>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Find a Branch</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Loan Calculator</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Open Account</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>True Server</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Chat with Ivy</Link>
                      </li>
                      </ul>
                      <img src="assets/img/fidelity-ad-2.jpg" alt="bank-ad" className='h-52 w-60 my-8 mx-6'/>
                    </div>
                  </div>
                </li>
                <li className='px-3.5 dropdown relative inline'><Link to='#'>SME Banking</Link>
                <div className='dropdown-sub-menu absolute hidden  '>
                    <div className='flex w-[750px] bg-gray-50 justify-between shadow-sm   h-80 rounded-md'>
                    <span className='dropdown-header left-10'>SME Banking</span>
                    <ul className='  dropdown-list pt-12 '>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Low cost Current Account</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Fidelity SME Academy</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>SME Loans & Advance</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Fidelity SME Forum</Link></li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Open Account online</Link>
                      </li>
                    </ul>
                    <span className='dropdown-header left-64 '>Self Service</span>
                    <ul className='  dropdown-list pt-12 mr-4'>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Find a Branch</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Loan Calculator</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Open Account</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>True Server</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Chat with Ivy</Link>
                      </li>
                      </ul>
                      <img src="assets/img/fidelity-8.jpg" alt="bank-ad" className='h-52 w-60 my-8 mx-14'/>
                    </div>
                  </div>
                </li>
                <li className='px-3.5 dropdown relative inline'>
                  <Link to='#'>Corporate Banking</Link>
                <div className='dropdown-sub-menu absolute hidden  '>
                    <div className='flex w-[750px] bg-gray-50 justify-between shadow-sm   h-80 rounded-md'>
                    <span className='dropdown-header left-10'>Corporate Banking</span>
                    <ul className='  dropdown-list pt-12 '>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Exchange Rate</Link>
                     </li>
                    </ul>
                    <span className='dropdown-header left-56'>Self Service</span>
                    <ul className='  dropdown-list pt-12 mr-4'>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Find a Branch</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Loan Calculator</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Open Account</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>True Server</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Chat with Ivy</Link>
                      </li>
                      </ul>
                      <img src="assets/img/fidelity-ad-3.jpg" alt="bank-ad" className='h-52 w-60 my-8 mx-14'/>
                    </div>
                  </div>
                </li>
                <li className='px-3.5 dropdown relative inline'>
                  <Link to='#'>Private Banking</Link>
                <div className='dropdown-sub-menu absolute hidden  '>
                    <div className='flex w-[750px] bg-yellow-50 justify-between shadow-sm   h-80 rounded-md'>
                    <span className='absolute top-6 left-10 text-yellow-600 font-bold'>Private Banking
                    </span>
                    <ul className='  dropdown-list pt-12 '>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>About Private Banking</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Service</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Testimonials</Link>
                      </li>
                      <li className='py-2 px-10 list-style'>
                        <Link to='#'>Contact Private Banking</Link></li>
                    </ul>
                    <span className='dropdown-header left-64 '>Self Service</span>
                    <ul className='  dropdown-list pt-12 mr-4'>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Find a Branch</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Loan Calculator</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Open Account</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>True Server</Link>
                      </li>
                      <li className='py-2 px-10  list-style'>
                        <Link to='#'>Chat with Ivy</Link>
                      </li>
                      </ul>
                      <img src="assets/img/fidelity-6.jpg" alt="bank-ad" className='h-52 w-60 my-8 mx-12'/>
                    </div>
                  </div>
                </li>
            </ul>
        </div>
    </div>
   </div>
  );
};

export default Navbar;

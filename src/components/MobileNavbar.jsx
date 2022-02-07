// import { ShoppingBagIcon } from '@heroicons/react/outline';
// // import { HomeIcon } from '@heroicons/react/solid';
// import React,{useState} from 'react';
// import { Link } from 'react-router-dom';

// import * as FaIcons from "react-icons/fa";
// import * as AiIcons  from "react-icons/ai"
// import { SidebarData } from './SidebarData';


// const MobileNavbar = () => {
//     const [sidebar, setsidebar] = useState(false);

//     const showSidebar = () => setsidebar(!sidebar);

//     return (
//         <section className='bg-white  h-16 w-full  fixed top-0 left-0 right-0 z-50'>
//             <div className='px-16  h-16 w-full flex items-center '>
//             <div className='navbar'>
//                 <Link to="#" className="menu-bars">
//                     <FaIcons.FaBars onClick={showSidebar}/>
//                 </Link>
//             </div>
//             <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//                 <ul className='nav-menu-items'>
//                     <li className='navbar-toggle'>
//                         <Link to='#' className='menu-bars'>
//                             < AiIcons.AiOutlineClose/>
//                         </Link>
//                     </li>
//                     {SidebarData.map((item, index) => {
//                         return (
                            
//                             <li key={index} className={item.cName}>
//                                 <Link to={item.path}>
//                                     <span>{item.title}</span>
//                                 </Link>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </nav>
//                 <div className='flex'>
//                     <button className='text-[16px] flex bg-[#6BC048]  py-3 px-3.5 font-bold mx-4 text-white shadow-lg rounded-md'>LOGIN
//                     <ShoppingBagIcon className="w-5 h-5 ml-1.5"/>
//                     </button>
//                 </div>
//             </div>
//         </section>
//         );
// };

// export default MobileNavbar;






// {/* <div className='navbar'>
//                     <nav className=''>
//                         <ul>
//                             <li>
//                                 <Link to='#'> <HomeIcon className='h-10 w-10'/> </Link>
//                             </li>
//                             <li>
//                                 <Link to='#'> About Us </Link>
//                             </li>
//                             <li>
//                                 <Link to='#'> Investor Relations </Link>
//                             </li>
//                             <li>
//                                 <Link to='#'> Agric & Export</Link>
//                             </li>
//                             <li>
//                                 <Link to='#'> CRS </Link>
//                             </li>
//                             <li>
//                                 <Link to='#'> Media </Link>
//                             </li>
//                             <li>
//                                 <Link to='#'> Contact </Link>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div> */}
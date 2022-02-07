import React from 'react';
import About from '../components/About';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import MiniFooter from '../components/MiniFooter';
// import MobileNavbar from '../components/MobileNavbar';
import Navbar from '../components/Navbar';
import People from '../components/People';
import PeopleList from '../components/PeopleList';
import Welcome from '../components/Welcome'



const AboutUs = () => {
  return (
  <div>
    {/* <MobileNavbar /> */}
    <Navbar />
    <About />
    <Welcome />
    <Cards />
    <People />
    <PeopleList />
    <MiniFooter />
    <Footer />
  </div>
  )
};

export default AboutUs;



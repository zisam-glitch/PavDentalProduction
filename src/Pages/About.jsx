import React from 'react';

import Contact from '../Components/Contact/Contact';

import About2 from '../Components/About/AboutA';
import Text from '../Components/About/Text';

import Hero2 from '../Components/Hero/Hero2';
import LogoImage from '../assets/imges/logos2.png'
import docPavImg from '../assets/imges/pavan.jpg'



const heroData = {
  bgImg: 'images/before-after-bg',
  bgShape: '',
  title: ['Crutches', 'Laboratory', 'Cardiology', 'Dentist', 'Neurology'],
};




const aboutData2 = {
  title:
    'The Dream and The Team    ',
  subTitle:
    "Dr. Pav's dream was shared, nurtured, and diligently planned alongside his close friend and colleague, Dr. Hassan. Together, they meticulously crafted a plan, encompassing these crucial steps: <br/> <br/>  <span>Dream : </span> Envisioning a patient-centered clinic where the best dental care meets the flexibility of mobile services.<br/> <span>Creating a Partnership : </span> Building a foundation of shared passion and complementary expertise.<br/> <span>Reaching Shared Value between the Partnership : </span> Defining their commitment to patient well-being and professional excellence.<br/> <span>Creating a Very Detailed Roadmap : </span> Outlining every stage, from cutting-edge technology acquisition to community outreach.",
    img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1760540011/Pav_20250911_115422_0000_vy3vhp.png",
};
const aboutData = {
  title:
    'The Future of Dentistry    ',
  subTitle:
    "We believe the Pav Dental App, alongside our Hub and Mobile clinic, represents the future of dentistry. It's a future shaped by Dr. Pav's belief in accessibility and patient empowerment. <br/>  <br/>We're proud to announce the Pav Dental App – think of it as the Uber of dentistry! With just a few taps, you can:           <br /> <ul><li>Schedule routine checkups and cleanings at your home or office.</li><li> Book emergency appointments for swift relief.</li><li>Consult virtually with our dentists for immediate advice.</li></ul>    ",
   
    img: 'https://res.cloudinary.com/db1i46uiv/image/upload/v1724273171/Screenshot_2024-08-22_024549_qwbe7r.png',
};



const About = () => {
  return (
    <>
      <Hero2 data={heroData} />
      <About2 data={aboutData2} />
      <Text />
      <About2 data={aboutData} />
      <Contact />

    </>
  );
};

export default About;

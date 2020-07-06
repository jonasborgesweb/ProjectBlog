import React from 'react';

import {
  Center,
  Container
} from './styles';

import Banner from './Partial/Banner';
import Services from './Partial/Services';
import About from './Partial/About';
import Blog from './Partial/Blog';
import Testimonials from './Partial/Testimonials';

const Home:React.FC = () =>{
    return(
      <>
        <Banner />
        <Services />
        <About />
        <Blog />
        <Testimonials />
      </>
    )
}

export default Home;
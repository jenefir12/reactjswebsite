import React from 'react';
import web from '../src/images/png.222.svg';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const About1 = () => {
    return(
        <Common
          name = "Welcome to  About Page"
          imgsrc={web}
          visit="/contact"
          btnname="Contact Now"
        />
    );
}

export default About1;
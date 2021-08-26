import React from 'react';
import web from '../src/images/hello.svg';
import { NavLink } from 'react-router-dom';
import Common from './Common';


const Home = () => {
    return(
        <Common
          name = "Grow Your Business with React Js"
          imgsrc={web}
          visit="/service"
          btnname="Get Started"
        />
    );
}

export default Home;
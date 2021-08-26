import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <>
          <div className="d-flex justify-content-around text-white bg-info list-unstyled">
            <NavLink exact activeClassName="active" to="/about">About Us</NavLink>
            <NavLink exact activeClassName="active" to="/contact">Contact Us</NavLink>
            <NavLink exact activeClassName="active" to="/services">Our Services</NavLink>
            <NavLink exact activeClassName="active" to="/users">User</NavLink>
            <NavLink exact activeClassName="active" to="/search">Search</NavLink>
          </div>
        </>
    );
}
export default Menu;
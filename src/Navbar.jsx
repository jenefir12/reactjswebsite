import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
         <div className="container-fluid nav_bg">
             <div className="row">
                 <div className="col-lg-10 mx-auto">
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">REACT JS</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto" style={{marginLeft:'45rem'}}>
                        <li className="nav-item active">
                            <NavLink activeClassName="menu_active" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="menu_active" exact to="/service">Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="menu_active" exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="menu_active" exact to="/contact">Contact</NavLink>
                        </li>
                        </ul>
                    </div>
                    </nav>
                 </div>
             </div>
         </div>
        </>
    );
}
export default Navbar;
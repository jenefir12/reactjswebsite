import React from 'react';
import web from '../src/images/png.222.svg';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return(
        <div className="d-flex align-items-center">
            <div className="container">
                <div className="row" style={{marginTop:'7rem'}}>
                    <div className="col-lg-6  d-flex justify-content-center flex-column">
                        <h1>{props.name}</h1>
                        <h2 className="my-3">
                            we are the talented developer making websited
                        </h2>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc} alt="image" className="img-fluid animated"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Common;
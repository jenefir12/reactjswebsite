import React from 'react';
import web from '../src/images/mob1122.jpg';

const Card = (props) => {
    return(
        <>
                <div className="col-lg-4">
                    <div className="card" style={{width:'18rem'}}>
                        <img src={props.imgsrc} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Card;
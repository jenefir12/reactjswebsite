import React from 'react';
import web from '../src/images/mob1122.jpg';
import Card from './Card';
import Data1 from './Data1';

const Service = () => {
    return(
        <>
        <h2 style={{textAlign:'center'}}>Our Service</h2>
            <div className="container">
                <div className="row">
                        {
                            Data1.map((val,index) => {
                            return <Card
                            key={index}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            />
                        })
                        }
                </div>
            </div>
        </>
    );
}

export default Service;
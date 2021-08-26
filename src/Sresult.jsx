import React from 'react';

const Sresult = (props) =>{
    const img = `https://source.unsplash.com/300x300/?${props.onSelect}`;
    return(
        <div>
            <img src={img} alt="images" className="text-center"/>
        </div>
    );
}
export default Sresult;
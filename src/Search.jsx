import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () => {
    const[text,setText] = useState('');
    const inputChange = (event) => {
        const data = event.target.value;
        setText(data);
    }
    return(
        <>
          <h4 className="text-center">Hello Search</h4>
          <div className="d-flex align-items-center justify-content-center mt-5">
            <input type="text" placeholder="Search Store" value={text} onChange={inputChange}/>
          </div>
          {text === "" ? null : <Sresult
          onSelect={text}
          />}
        </>
    );
}

export default Search;
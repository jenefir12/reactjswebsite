import React, { useState } from 'react';

const Contact1 = () => {
    const[text,setState] = useState({
        fname:'',
        email:'',
        password:''
    });
    const inputValue = (event) => {
        const{name,value} = event.target;
        setState((preVal) => {
            return{
                ...preVal,
                [name]:value,
            }
        })
    }
    const myFunction = () => {
        alert(`My name is${text.fname} My Email is ${text.email}
        My Password is ${text.password}`
        );
    }
    return(
        <>
        <h1 style={{textAlign:'center'}}>Contact Me Now</h1>
        <div className="container">
        <form>
        <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Enter Name</label>
                <input type="text" name="fname" value={text.fname} onChange={inputValue} className="form-control" id="name" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" value={text.email} onChange={inputValue} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" value={text.password} onChange={inputValue} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" onClick={myFunction} className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    );
}

export default Contact1;
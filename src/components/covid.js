import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Covid = () => {
    const[num,setState] = useState(0);
    const[num1,setState1] = useState(0);
    const inputValue = (event) =>{
        setState(event.target.value);
    }
    useEffect(()=>{
        async function getData(){
          const actualData  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
          console.log(actualData);
          setState(actualData.data.name);
          setState1(actualData.data.moves.length);
        }
        getData();
    });
    return(
        <>
        <h1 className='text-center'>you choose {num} value</h1>
        <h1 className='text-center'>Total Moves is {num1}</h1>
        <select className='text-center' value={num} onChange={inputValue}>
            <option value='1'>1</option>
            <option value='25'>25</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
        </>
    );
}

export default Covid;


















// import React, { useEffect, useState } from 'react';

// const Covid = () => {

//     const[data,setData] = useState([]);

//     const getCovidData = async () => {
//        const actualData  = await fetch('https://data.covid19india.org/data.json');
//        const res = await actualData.json();
//        console.log(res.statewise);
//        setData(res.statewise);
//     }

//     useEffect(()=>{
//         getCovidData();
//     },[]);
//     return(
//         <>
//         <h1 className="text-center">COVID API LEARN</h1>
//         {data.map((curElement,index) => {
//             return(
//                 <tr key={index}>
//                     <th>{curElement.state}</th>
//                     <td>{curElement.confirmed}</td>
//                     <td>{curElement.recovered}</td>
//                     <td>{curElement.active}</td>
//                     <td>{curElement.lastupdatedtime}</td>
//                 </tr>
//             );
//         })}
//         </>
//     );
// }
// export default Covid;


















// import React, { useEffect, useState } from 'react';

// const Covid = () => {
//     const[recover,setRecover] = useState([1]);
    
//     const getCovidData = async () => {
//         try{
//             const res = await fetch('https://data.covid19india.org/data.json');
//             const actualData = await res.json();
//             console.log(actualData);
//             setRecover(actualData);
//         } catch(err) {
//             console.log(err);
//         }
//     }
//     useEffect(()=>{
//         getCovidData();
//         // alert('welcome to screen');
//     },[]);
//     return(
//         <>
//         <h1 style={{textAlign:'center'}}>LIVE</h1>
//         <h2 style={{textAlign:'center'}}>COVID-19 CORONAVIRUS TRACKER</h2>
//         <ul>
//             <li className="card" style={{display:'flex',justifyContent:'space-around'}}>
//                 <div className="card_main">
//                     <div className="card-inner">
//                         <p className="card-name"><span>our</span>country</p>
//                         <p className="card-total">Pakistan</p>
//                     </div>
//                 </div>
//                 <li className="card">
//                     <div className="card_main">
//                         <div className="card-inner">
//                             <p className="card-name"><span>Total</span>Recovered</p>
//                             <p className="card-total">{recover.recovered}</p>
//                         </div>
//                     </div>
//                 </li>
//                 <li className="card">
//                     <div className="card_main">
//                         <div className="card-inner">
//                             <p className="card-name"><span>Total</span>Confirmed</p>
//                             <p className="card-total">{recover.confirmed}</p>
//                         </div>
//                     </div>
//                 </li>
//             </li>
//             <br/>
//             <li className="card" style={{display:'flex',justifyContent:'space-around'}}>
//                 <div className="card_main">
//                     <div className="card-inner">
//                         <p className="card-name"><span>Total</span>Deaths</p>
//                         <p className="card-total">{recover.deaths}</p>
//                     </div>
//                 </div>
//                 <li className="card">
//                     <div className="card_main">
//                         <div className="card-inner">
//                             <p className="card-name"><span>Total</span>Delta-Confirmed</p>
//                             <p className="card-total">{recover.deltaconfirmed}</p>
//                         </div>
//                     </div>
//                 </li>
//                 <li className="card">
//                     <div className="card_main">
//                         <div className="card-inner">
//                             <p className="card-name"><span>Total</span>Migrated Others</p>
//                             <p className="card-total">{recover.migratedother}</p>
//                         </div>
//                     </div>
//                 </li>
//             </li>
//         </ul>
//         </>
//     );
// }
// export default Covid;
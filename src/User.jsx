import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';


// const User = ({match}) => {
//     return(
//         <h1>Wecome {match.params.name} User</h1>
//     );
// }
const User = () => {
    const {fname,lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    const myFunction = () => {
        history.goBack();
    }
    return(
        <>
        <h1>welocme {fname} {lname}</h1>
        <p>My Current hash is {location.hash}</p>
        <p>My Current Location is {location.pathname}</p>
        {location.pathname === `/users/5/syed` ? (
            <button onClick={myFunction}>click me</button>
        ): null}
        </>
    )
}
export default User;
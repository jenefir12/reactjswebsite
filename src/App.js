import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About1 from './About1';
import Contact1 from './Contact1';
import Service from './Service';
import Navbar from './Navbar';

const App = () => {
  return(
    <>
    <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About1}/>
       <Route exact path="/contact" component={Contact1}/>
       <Route exact path="/service" component={Service}/>
       <Redirect to="/"/>
     </Switch>
    </>
  );
}
export default App;


















// import React from 'react';
// import Covid from './components/covid';
// import { Route , Switch } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import About from './About';
// import Contact from './Contact';
// import Error from './Error';
// import Menu from './Menu';
// import Services from './Services';
// import User from './User';
// import Search from './Search';

// const App = () => {
//   const Name  = () => {
//     return(
//       <>
//       <h1>Mahad Bukhari Best Front End React Js Developer</h1>
//       </>
//     );
//   }
//   return(
//     <>
//     <h1 className="text-center mt-3">LEARN REACT ROUTER</h1>
//     <br/>
//     <br/>
//     <Menu/>
//     <br/>
//     <br/>
//     <Switch>
//       <Route exact path='/about' component={() => <About name="About Us"/>}/>
//       <Route exact path='/contact' render={() => <Contact name="Contact Us"/>}/>
//       <Route exact path='/contact/name' component={Name}/>
//       <Route exact path='/services' component={Services} />
//       <Route exact path='/users/:fname/:lname' component={User}/>
//       <Route exact path='/search' component={Search}/>
//       <Route component={Error}/>
//     </Switch>
//     </>
//   );
// }
// export default App;
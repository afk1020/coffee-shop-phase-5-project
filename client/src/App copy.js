import React, {Component} from 'react';
import './App.css';
import Home from './Containers/Home'
import SignUp from './Components/SignUp'
import LoginForm from './Components/LoginForm'
import Products from './Containers/Products';
//import NavBar from './Components/Navbar';
//import Footer from './Components/Footer';
//import Home from './Home';
// import {Switch, Route } from "react-router-dom";
import Cart from './Containers/Cart';
//import CartItem from './Component/CartItem';
import Navbar from "react-bootstrap/Navbar";
import Routes from './Routes';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { Link } from 'react-router-dom'
import { render } from 'react-dom';

class App extends Component {
  
  

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LoginForm onLogin={setUser}/>


   

// state = {
//   products:[],
//   total: 0,
//   cartItems: [],
//   users:[],
//     name: "",
//     email: "",
//     isLogged: false,
//     currentUser: {},
//     error: "",
// }




  // console.log(products)
//   handleCartItems= (data) => {
//     let collection=[]
//     data.map ((cartItems)  => {
//       let x = cartItems.product
//       collection.push(x)
//     })

//   console.log(collection)
//   this.setState({
//   cartItems: collection
// })}



render(){
return(
  <div className="App container py-3">
  <Router>
  <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
  <LinkContainer to="/">
    <Navbar.Brand className="font-weight-bold text-muted">
      OneStopCoffee
      </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle/>
      <Navbar.Collapse className="justify-content-end">
      <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/Products">
            <Nav.Link>Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
            <Nav.Link>Purchase</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/SignUp">
            <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/LoginForm">
           <Nav.Link href="/login">Login</Nav.Link>
           </LinkContainer>
          </Nav>
     </Navbar.Collapse>
      </Navbar>
      </Router>
      <Routes/>
      </div>
);
}
}

export default App;

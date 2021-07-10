
import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Containers/Home'
import SignUp from './Components/SignUp'
import LoginForm from './Components/LoginForm'
import Logout from './Components/Logout'
import Products from './Containers/Products';
import Cart from './Containers/Cart';

export default function App() {
let [user, setUser]= useState({})
let [cartProducts, setCartProducts]= useState([]);
// let [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => {
     setCartProducts([...cartProducts, product])
  }
  
 
            
  let removeFromCart = (products) => {
      cartProducts.filter((x) =>x.id !== products.id);
      setCartProducts([]);
  }
useEffect(() => {
  // auto-login
  fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);

if (!user) return <LoginForm onLogin={setUser}/>

 

  return (
    <Router>
      <div className="App">
        <nav className="nav-bar">
          <ul className="nav-bar-ul">
            <li className="nav-bar-ul-li a">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-bar-ul-li a">
              <Link to="/products">Products</Link>
            </li>
            <li className="nav-bar-ul-li a">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="nav-bar-ul-li a">
              <Link to="/signup">signup</Link>
            </li>
            <li className="nav-bar-ul-li a">
              <Link to="/loginform">login</Link>
            </li>
            <li className="nav-bar-ul-li a">
              <Link to="/logout">Logout</Link>
            </li>
            <li className="nav-bar-ul-li a">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            <Products addProduct={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart cartProducts={cartProducts}/>
          </Route>
          <Route path="/signup">
            <SignUp onLogin={setUser}/>
          </Route>
          <Route path="/loginform">
            <LoginForm onLogin={setUser}/>
          </Route>
          <Route path="/logout">
            <Logout setUser={setUser}/>
          </Route>
          
          {/* <Route path="/profile">
            <Home />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

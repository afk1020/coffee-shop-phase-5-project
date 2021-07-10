
import React, {useState, useEffect} from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Containers/Home'
import SignUp from './Components/SignUp'
import LoginForm from './Components/LoginForm'
import Products from './Containers/Products';
import Cart from './Containers/Cart';

export default function App() {
let [user, setUser]= useState({})
let [cartProducts, setCartProducts]= useState([])


        const addToCart = (product) => {
          setCartProducts([...cartProducts, product])
            // let cartCopy = [...cartProducts];
            // let {ID} = product;
            // let existingProduct = cartCopy.find(cartProduct => cartProduct.ID === ID);
            // if (existingProduct) {
            //     existingProduct.quantity += product.quantity //update item
            // } else { //if item doesn't exist, simply add it
            //     cartCopy.push(products)
            // }
            // setCartProducts(cartCopy)
            // let stringCart = JSON.stringify(cartCopy);
            // localStorage.setItem("cart", stringCart)
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
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
            <li>
              <Link to="/loginform">login</Link>
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

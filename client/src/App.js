
import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Containers/Home'
import SignUp from './Components/SignUp'
import LoginForm from './Components/LoginForm'
import Logout from './Components/Logout'
import Products from './Containers/Products';
import Cart from './Containers/Cart';
import Profile from './Containers/Profile';
import { useHistory } from 'react-router';


export default function App() {
let [user, setUser]= useState({})
let [products, setProducts]= useState([])
let [cartProducts, setCartProducts]= useState([]);
let [cart, setCart]= useState([])
let [cart_id, setCartId] =useState([])
// let [isLoggedIn, setIsLoggedIn] = useState(false);

let history = useHistory()
  let addToCart = (products) => {
    if(!cartProducts.find((oldproduct) => products === oldproduct))
     setCartProducts([products])
  }
             
  let removeFromCart = (products) => {
      cartProducts.filter((x) =>x.id !== products.id);
      setCartProducts([]);
  }
 
  function handleDeleteUser(deletedUsers) {
    setUser((user) =>
      user.id !== deletedUsers.id)
  }

  function handleEditUser(editUsers) {
    setUser((user) =>
      user.name !== editUsers.name)
  }

  function setCartsItems(){
    console.log(cartProducts)
  // let stringCart = JSON.stringify(cartCopy);
  // localStorage.setCartProducts("cart", stringCart);
  fetch("/cart_items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({products_id:products[0].id, user_id: user.id}),
  })
  .then(res => res.json())
  alert("your cart has been submitted")
  
}

useEffect(() => {
  // auto-login
  fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);

useEffect(() => {
  fetch("/products").then((r)=> {
    if (r.ok){
      r.json().then((products)=>setProducts(products));
    }
  });
}, []);
         
// if (!user) return <LoginForm onLogin={setUser}/>


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
            <Products products={products} addProduct={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart products={products} cartProducts={cartProducts} removeFromCart={removeFromCart} setCartsItems={setCartsItems}/>
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
          <Route path="/profile">
            <Profile user={user} setUser={setUser} onDeleteUser={handleDeleteUser} onEditUser={handleEditUser}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

import React, {Component} from 'react';
import { NavItem } from 'react-bootstrap';
import CartProductsCard from '../Components/CartProductsCard';

class Cart extends Component {
  // state = {
  //   cart: [],
  //   cart_id:1,
  //   cartItems:[]
  // }

  // setCartsProducts=()=> {
  //   // let stringCart = JSON.stringify(cartCopy);
  //   // localStorage.setCartProducts("cart", stringCart);
  //   fetch("/cartItems", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({cart_id, products_id:products.id, user_id: user.id}),
  //   })
  //   .then(res => res.json())
  //   .then(res => setState([...cartsItems, res]))
  // }


    render() {
      let card = this.props.cartProducts.map(product => (
          <CartProductsCard
            product ={product}
            key = {product.id}
            handleClick = {this.props.addProduct}
            handleClickDelete = {this.props.removeFromCart}
      />))

      // let handleTotalPrice = () => {
      //   let totalPrice = 0;
      //   this.state.cartProducts.forEach((product)=> {
      //     if(product.isChecked){
      //       totalPrice += product.count*product.price;
      //     }
      //   })
      //   console.log('totalPrice', totalPrice);
      //   return totalPrice

      // }

        return(
      <div className="ui segment cart">
      <div className="ui five column grid">
      <div className="title">Your Cart</div>
        <div className="row cart-products-row">
          {card}
        </div>
        {/* <div> Total: {this.handleTotalPrice}</div> */}
        <div className="btnn" 
      onClick = {this.props.setCartsItems}>
          <button>
            <a>
              Checkout
            </a>
          </button>
          </div>
      </div>
    </div>
    );
  }
}

export default Cart;
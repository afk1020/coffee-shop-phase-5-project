import React, {Component} from 'react';
import { NavItem } from 'react-bootstrap';
import CartProductsCard from '../Components/CartProductsCard';

class Cart extends Component {
    render() {
      let card = this.props.cartProducts.map(product => (
          <CartProductsCard
            product ={product}
            key = {product.id}
            handleClick = {this.props.addProduct}
            handleClickDelete = {this.props.removeFromCart}
      />))

      let handleTotalPrice = () => {
        let totalPrice = 0;
        this.state.cartProducts.forEach((product)=> {
          if(product.isChecked){
            totalPrice += product.count*product.price;
          }
        })
        console.log('totalPrice', totalPrice);
        return totalPrice
      }

        return(
      <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
      <div className="title">Your Cart</div>
        <div className="row cart-products-row">
          {card}
        </div>
        <div> Total: {this.handleTotalPrice}</div>
        <div className="btnn" 
      onClick = {this.props.checkOut}>
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
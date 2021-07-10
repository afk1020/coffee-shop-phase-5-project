import React, {Component} from 'react';
import CartProductsCard from '../Components/CartProductsCard';

class Cart extends Component {
    render() {
      let card = this.props.cartProducts.map(product => (
          <CartProductsCard
            product ={product}
            key = {product.id}
            handleClick = {this.props.addProduct}
            handleClickDelete = {this.props.deleteProduct}
      />))
        return(
      <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
      <div className="title">Your Cart</div>
        <div className="row cart-products-row">
          {card}
        </div>
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
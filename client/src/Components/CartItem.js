
import React, {Component} from 'react';
import ProductsCard from '../Components/ProductsCard'

class CartItems extends Component {

        state = {
            CartItems:[]
        }
      
        componentDidMount () {
          
            fetch("/products")
                         .then((r) => r.json())
                         .then((data) => this.setState({products: data}))
                   
        }
          
        render() {
            let card = this.state.products.map(product => (
                <ProductsCard
                  product ={product}
                  key = {product.id}
                  handleClick = {this.props.addProduct}
                  handleClickDelete = {this.props.deleteProduct}
            />))
      
            return(
              <div className="ui four column grid">
                  <div className="title">Your Cart</div>
              <div className="row">
                 {card}
              </div>
            </div>
          );
        }
      }
      
      export default Products;
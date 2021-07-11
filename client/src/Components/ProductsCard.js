import React, { Component } from 'react';
import './ProductsCard.css';
import { Link } from 'react-router-dom'

class ProductsCard extends Component {
  
  
    render() {
    return (
      <div className="products-card" 
      key={this.props.product.id}
      
        //this.props.handleClick()}
      >
        <div className="image-container">
        <img
              alt="coffee image"
              className="ui medium circular image bordered"
              src={this.props.product.image_url}
            />
        
      </div>
      <div className="card-content">
      <div className="card-title">
        <h4>{this.props.product.name}</h4>
      </div>
      <div className="card-body">
      <p><span style={{fontWeight: "bold"}}>price: </span> {this.props.product.price} </p>
        <p><span style={{fontWeight: "bold"}}>description: </span> {this.props.product.description} </p>
        <p><span style={{fontWeight: "bold"}}>quantity: </span>{this.props.product.quantity} </p>
       
      </div>
      <div className="btnn" 
      onClick = {this.props.handleClick}>
      
          <button>
            <a>
              Add to cart
            </a>
          </button>
          
      </div>
      </div>
      </div>
    );
  }

}

export default ProductsCard;
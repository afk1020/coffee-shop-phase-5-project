import React, {Component} from 'react';
import ProductsCard from '../Components/ProductsCard'

class Products extends Component {

  state = {
      products:[]
  }

  componentDidMount () {
      fetch("/products")
    			   .then((r) => r.json())
    			   .then((data) => this.setState({products: data}))
  }
    
  render() {
      let card = this.props.productData.map(product => (
          <ProductsCard
            product ={product}
            key = {product.id}
            handleClick = {this.props.addProduct}
      />))

      return(
        <div className="ui four column grid">
        <div className="row">
           {card}
        </div>
      </div>
    );
  }
}

export default Products;

// componentDidMount () {
//   fetch("/products")
// 			   .then((r) => r.json())
// 			   .then((data) => this.setState({products: data}))

//   // fetch("/carts")
// 	// 		   .then((r) => r.json())
// 	// 		   .then((data) => this.setState({products: data}))   

//   axios.get("/cartitems", {crossDomain: true}, {withCredentials: true})
//    .then(response => this.handleMyCart(response.data.myCart))
// }


// addProduct =(product) => {
//   //console.log(product)
//   let postOption = {
//     method: "POST",
//     headers: {
//       "Content-Type": 'application/json',
//       Accepts: 'application/json'
//     },
//     body: JSON.stringify(product)
//   }
//   console.log(postOption)

//  fetch('/cart', postOption, {crossDomain: true}, {withCredentials: true})
//       .then(res => res.json())
//       .then(this.setState({ myCart: [...this.state.myCart, product] }))
//   }

// removeProduct = (product) => {
//   this.setState({
//     myCart:this.state.myCart.filter(oldProduct => oldProduct !== product)
//   })
// }
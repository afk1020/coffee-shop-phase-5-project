import React, {setState}  from 'react';
import ProductsCard from '../Components/ProductsCard'

export default function CartItems() {
    let [cartProducts, setCartProducts]= useState([])

        let addToCart = (products) => {
            let cartCopy = [...cartProducts];
            let {ID} = products;
            let existingProduct = cartCopy.find(cartProduct => cartProduct.ID === ID);
            if (existingProduct) {
                existingProduct.quantity += products.quantity //update item
            } else { //if item doesn't exist, simply add it
                cartCopy.push(products)
            }
            setCartProducts(cartCopy)
            let stringCart = JSON.stringify(cartCopy);
            localStorage.setItem("cart", stringCart)
            }
        
            
       let removeFromCart = (products) => {
           cartProducts.filter((x) =>x.id !== products.id);
           setCartProducts([]);
       }

    return(
        <div  className ="content">
            <div className="main">
                <Filter count={products.length}>
                    <ul className="products">
                        {products.map((product)=> {
                            return(
                                <ProductsCard style={width: "30rem"} className="product" key={product.id}>
                                    <ProductsCard.Img variant="top" src={product.image_url} className="img" />
                                    <ProductsCard.Body>
                                        <ProductsCard.Title>{product.name}</ProductsCard.Title>
                                        <ProductsCard.Text>{product.description}</ProductsCard.Text>
                                        <ProductsCard.Text>quantity Count: {product.quantity}</ProductsCard.Text>
                                        <ProductsCard.Text>{product.price}</ProductsCard.Text>
                                        <Button variant="primary" onClick={()=> addToCart(product)}>
                                        Add to Cart
                                        </Button>
                                    </ProductsCard.Body>
                                    </ProductsCard>
                            );
                        })};
                </ul>
            </Filter>
        </div>
    </div>
    );
    
}
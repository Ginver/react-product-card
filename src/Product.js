import React from "react";
import './Product.css';

const Product = (props) => {

    return (
        <>
            <div className="container">
                <div className="product__card">
                    <img className="productImage" src={props.image} alt={props.title}
                    />
                    <h2 className="productTitle">
                        {props.title}
                    </h2>
                    <p className="productDescription">
                        {props.description}
                    </p>
                </div>
            </div>


        </>

    )
}

export default Product;
import React, { useState, useEffect } from "react";
import '../CSS/product.css';
import QuickView from '../assests/quickview.svg';
import CartIcon from '../assests/cart.svg';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => {
                console.log("Fetched Data:", response.data);
                setProducts(response.data.slice(0, 5));
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setError("Error fetching data. Please try again later.");
            });
    }, []);

    return (
        <div id="feature-products-container">
            <div className="feature-products-header">
                <div className="feature-products-flexbox">
                    <p className="products-heading">Featured Products</p>
                </div>

                <div className="feature-products--flexbox">
                    <ul>
                        <li className="all-button">All</li>
                        <li className="li">Power Tools</li>
                        <li className="li">Hand Tools</li>
                        <li className="li">Plumbing</li>
                        <li><i className="fa-solid fa-angle-left"></i></li>
                        <li><i className="fa-solid fa-angle-right"></i></li>
                    </ul>
                </div>
            </div>

            {error ? (
                <p className="error-message">{error}</p>
            ) : (
                <div className="product-list">
                    {products.map((details, index) => (
                        <div className="product-card" key={details._id}>
                            <div className="img-container">
                                <div className="quick">
                                    {index === 0 && <p className="all--button">HOT</p>}
                                    <img src={QuickView} alt="quick-view" className="quick-view"/>
                                </div>
                                <img src={`http://localhost:3001/${details.image}`} alt={details.name} className="product-img" />
                            </div>
                            <p className="product-model">SKU: {details.model}</p>
                            <p className="product-title">{details.name}</p>
                            <div className="review-box">
                                <div>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                                <div>
                                    <p className="review-count">{details.rating} Reviews</p>
                                </div>
                            </div>
                            <div className="price-cart">
                                <p className="price">&#8377;{details.price}</p>
                                <img src={CartIcon} alt="cart-icon" className="cart-icon"/>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Product;

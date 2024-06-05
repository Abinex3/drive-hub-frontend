import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../CSS/product-filter.css';

const ProductFilter = () => {
    const [topProducts, setTopProducts] = useState([]);
    const [specialOffers, setSpecialOffers] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => {
                console.log("Fetched Data:", response.data);
                const data = response.data;
                setTopProducts(data.slice(0, 3));
                setSpecialOffers(data.slice(3, 6)); 
                setBestSellers(data.slice(6, 9)); 
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setError("Error fetching data");
            });
    }, []);

    return (
        <div id="product-filter-container">
            <div className="filter-container">
                <div className="top-products">
                    <p className="filter-title">Top Rated Products</p>
                    {error ? (
                        <p className="error-message">{error}</p>
                    ) : (
                        <>
                            {topProducts.map((details, index) => (
                                <ProductCard key={details._id} details={details} />
                            ))}
                        </>
                    )}
                </div>

                <div className="special-offers">
                    <p className="filter-title">Special Offers</p>
                    {error ? (
                        <p className="error-message">{error}</p>
                    ) : (
                        <>
                            {specialOffers.map((details, index) => (
                                <ProductCard key={details._id} details={details} />
                            ))}
                        </>
                    )}
                </div>

                <div className="best-sellers">
                    <p className="filter-title">Best sellers</p>
                    {error ? (
                        <p className="error-message">{error}</p>
                    ) : (
                        <>
                            {bestSellers.map((details, index) => (
                                <ProductCard key={details._id} details={details} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

const ProductCard = ({ details }) => (
    <div className="product-card --card">
        <div className="img-container">
            <img src={`http://localhost:3001/${details.image}`} alt="product-img" className="product-img --img"/>
        </div>
        <div className="products-details --details">
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
                    <p className="review-count">26 Reviews</p>
                </div>
            </div>
            <div className="price-cart">
                <p className="price">&#8377;400</p>
            </div>
        </div>
    </div>
);

export default ProductFilter;

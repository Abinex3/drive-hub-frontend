import React from "react";
import '../CSS/home.css';
import Brand1 from '../assests/brand-1.png';
import Brand2 from '../assests/brand-2.png';
import Brand3 from '../assests/brand-3.png';
import Brand4 from '../assests/brand-4.png';
import Brand5 from '../assests/brand-5.png';
import Brand6 from '../assests/brand-6.png';
import Brand7 from '../assests/brand-7.png';
import Brand8 from '../assests/brand-8.png';
import Brand9 from '../assests/brand-9.png';
import Brand10 from '../assests/brand-10.png';
import Brand11 from '../assests/brand-11.png';
import Brand12 from '../assests/brand-12.png';
import Brand13 from '../assests/brand-13.png';
import Brand14 from '../assests/brand-14.png';
import Brand15 from '../assests/brand-15.png';
import Brand16 from '../assests/brand-16.png';
import Product from "./product";
import ProductFilter from "./product-filter";
import Delivery from '../assests/free-delivery.svg';
import Hours from '../assests/24-hours.svg';
import Safety from '../assests/payment-security.svg';
import Tag from '../assests/tag.svg';



const Home = () => {
    return(
    <div id="home-container">
        <div className="slide-container">
            <div className="slide-content">
                <p className="offer">30% OFF</p>
                <p className="content-title">When Buying Parts With Installation</p>
                <p className="content-sub">Installation of parts in the services of our partners.</p>
                <button className="shopping-button">Shop Now</button>
                <div className="image-slider-button">
                    <span className="first-slide"></span>
                    <span className="second-slide"></span>
                    <span className="third-slide"></span>
                </div>
            </div>
        </div>


        <div className="brand-container">
        <div className="brand-details">
            <img src={Brand1} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">aimparts</p>
        </div>

        <div className="brand-details">
            <img src={Brand2} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">windengine</p>
        </div>

        <div className="brand-details">
            <img src={Brand3} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">turboelectric</p>
        </div>

        <div className="brand-details">
            <img src={Brand4} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">startone</p>
        </div>

        <div className="brand-details">
            <img src={Brand5} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">brandix</p>
        </div>

        <div className="brand-details">
            <img src={Brand6} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">abs-brand</p>
        </div>

        <div className="brand-details">
            <img src={Brand7} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">greatcircle</p>
        </div>

        <div className="brand-details">
            <img src={Brand8} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">justromb</p>
        </div>

        <div className="brand-details">
            <img src={Brand9} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">fastwheels</p>
        </div>

        <div className="brand-details">
            <img src={Brand10} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">strokya-x</p>
        </div>

        <div className="brand-details">
            <img src={Brand11} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">mission-51</p>
        </div>

        <div className="brand-details">
            <img src={Brand12} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">fuelcorp</p>
        </div>

        <div className="brand-details">
            <img src={Brand13} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">redgate</p>
        </div>

        <div className="brand-details">
            <img src={Brand14} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">blocks</p>
        </div>

        <div className="brand-details">
            <img src={Brand15} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">blockbox</p>
        </div>

        <div className="brand-details">
            <img src={Brand16} alt="brand-1" className="brand-logo"/>
            <p className="brand-text">squaregarage</p>
        </div>
        </div>

        <Product />
       
       <div className="banner-conatainer">
            <div className="banner-box ---box">
            <p className="banner-title">MOTOR OILS</p>
                <p className="banner-sub">Synthetic motor oil with free shipping Friction free life guaranteed</p>
                <button className="banner-button">Shop Now</button>
            </div>

            <div className="banner-box --box">
            <p className="banner-title --title">SAVE UP TO $40</p>
                <p className="banner-sub">Luxurious interior part for real aesthetes Leather, fabric, ivory and more.</p>
                <button className="banner-button">Shop Now</button>
            </div>
       </div>

       <ProductFilter />


       <div className="service-container">
            <div className="free-shipping">
                <img src={Delivery} alt="delivery" className="delivary-logo"/>
                <div className="service-box">
                <p className="service-name">Free Shipping</p>
                <p className="service-sub">For orders from $50</p>
                </div>
            </div>

            <div className="free-shipping">
                <img src={Hours} alt="delivery" className="delivary-logo"/>
                <div className="service-box">
                <p className="service-name">Support 24/7</p>
                <p className="service-sub">Call us anytime</p>
                </div>
            </div>

            <div className="free-shipping">
                <img src={Safety} alt="delivery" className="delivary-logo"/>
                <div className="service-box">
                <p className="service-name">100% Safety</p>
                <p className="service-sub">Only secure payments</p>
                </div>
            </div>

            <div className="free-shipping">
                <img src={Tag} alt="delivery" className="delivary-logo"/>
                <div className="service-box">
                <p className="service-name">Hot Offers</p>
                <p className="service-sub">Discount up to 90%</p>
                </div>
            </div>
       </div>
    </div>
    )
}

export default Home;
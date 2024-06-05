import React from "react";
import '../CSS/footer.css';

const Footer = () => {
    return (
        <div id="footer-container">
            <div className="contact-container">
                <p className="contact-title">Contact Us</p>
                <p className="contact-sub">Hi, we are  always opern for cooperation and suggestions, contact us in one of the ways below.</p>

                <div className="contact-details">
                    <div>
                    <p className="contact--">phone number</p>
                    <p className="ans">089252 97807</p>
                    </div>

                    <div>
                    <p className="contact--">email address</p>
                    <p className="ans">careers@uitouxsolutions.com</p>
                    </div>
                </div>

                <div className="contact-details">
                    <div className="location">
                    <p className="contact--">our location</p>
                    <p className="ans">102, Athipalayam Rd,</p>
                    <p className="ans">Ramakrishnapuram,</p>
                    <p className="ans">Chinnavedampatti,</p>
                    <p className="ans">Coimbatore, Tamil Nadu</p>
                    <p className="ans">641049</p>
                    </div>

                    <div className="dd">
                    <p className="contact--">working hours</p>
                    <p className="ans">Mon-Fri 10:00am - 6:00pm</p>
                    </div>
                </div>
            </div>

            <div className="contact-container --contact">
                <p className="contact-title">Information</p>
                <div>
                <p className="txt">About Us</p>
                <p className="txt">Delivery Information</p>
                <p className="txt">Privacy Policy</p>
                <p className="txt">Brands</p>
                <p className="txt">Contact Us</p>
                <p className="txt">Returns</p>
                <p className="txt">Site Map</p>
                </div>
            </div>

            <div className="contact-container --contact">
                <p className="contact-title">My Account</p>
                <div>
                <p className="txt">Store Location</p>
                <p className="txt">Order History</p>
                <p className="txt">Wish List</p>
                <p className="txt">Newsletter</p>
                <p className="txt">Special Offers</p>
                <p className="txt">Gift Certificates</p>
                <p className="txt">Affiliate</p>
                </div>
            </div>

            <div className="contact-container">
                <p className="contact-title">Newsletter</p>
                <div>
                    <p className="contact-sub">Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</p>
                    <div className="input-box">
                    <input type="text" placeholder="user@example.com"/>
                    <button className="sub-button">Subscribe</button>
                    </div>

                <div className="icon-container">
                    <p className="contact-sub">Follow us on social networks</p>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

                </div>
            </div>

            


        </div>
    )
}

export default Footer;
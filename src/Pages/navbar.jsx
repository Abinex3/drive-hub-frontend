import React from "react";
import "../CSS/navbar.css";
import Logo from "../assests/logo.png";
import CarLogo from "../assests/car.svg";
import Search from "../assests/search.svg";
import Heart from "../assests/heart.svg";
import User from "../assests/person.svg";
import Cart from "../assests/cart.svg";

const Navbar = () => {
  return (
    <div id="nav-container">

      <nav>

        <div className="nav-intro">

          <div className="left-content">

            <ul className="first-ul">
              <span className="border"></span>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Store Location</li>
              <li>Track Order</li>
              <li>Blog</li>
            </ul>

          </div>

          <div className="right-content">

            <ul className="second-ul">
              <li>
                Compare:<span className="bold"> 2</span>
              </li>
              <li>
                Currency:<span className="bold"> RS</span>
              </li>
              <li>
                Language:<span className="bold"> EN</span>
              </li>
              <span className="border"></span>
            </ul>

          </div>
        </div>

        <div className="nav-center">

          <div className="content-1">
            <div className="logo-container">
              <img src={Logo} className="campany-logo" alt="company-logo" />
            </div>

            <div className="car-container">
              <img src={CarLogo} className="car-logo" alt="car-logo" />
              <p>Select Vehicle</p>
            </div>

            <div className="input-container">
              <input type="text" placeholder="Enter Keyword or Part Number" />
              <img src={Search} className="search-logo" alt="search-logo" />
            </div>
          </div>

          <div className="logo--container">
            <div className="wishlist-container">
              <img src={Heart} className="heart-logo" alt="heart-logo" />
              <p className="cart-count">1</p>
            </div>

            <div className="user-container">
              <img src={User} className="user-logo" alt="user-logo" />
              <p className="user-text">
                Hello, Log In
                <br />
                <span>My Account</span>
              </p>
            </div>

            <div className="user-container">
              <img src={Cart} className="user-logo" alt="cart-logo" />
              <p className="cart-count --cart">1</p>
              <p className="user-text">
                Shopping Cart
                <br />
                <span>$2,500</span>
              </p>
            </div>
          </div>

        </div>

        {/* <div className="nav--content">
          <div className="cat-container">
            <i className="fa-solid fa-bars-staggered"></i>
            <p className="cat-text">Shop By Category</p>
            <span>
              <i className="fa-solid fa-angle-down"></i>
            </span>
          </div>

          <div className="nav-list">
            <ul>
              <li>Home</li>
              <i className="fa-solid fa-angle-down"></i>
              <li>Megamenu</li>
              <i className="fa-solid fa-angle-down"></i>
              <li>Shop</li>
              <i className="fa-solid fa-angle-down"></i>
              <li>Blog</li>
              <i className="fa-solid fa-angle-down"></i>
              <li>Account</li>
              <i className="fa-solid fa-angle-down"></i>
              <li>Pages</li>
              <i className="fa-solid fa-angle-down"></i>
              <li>Buy Theme</li>
            </ul>

            <p className="num">Call Us : 0892 97807</p>
          </div>
        </div> */}


      </nav>
    </div>
  );
};

export default Navbar;

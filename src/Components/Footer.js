import React from "react";
import footerLogo from "../images/footer-logo.svg";
import locationIcon from "../images/icon-location.svg";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-content">
          <div className="contact">
            <img className="footer-logo" src={footerLogo} alt="Home." />
            <div className="contact-info">
              <div className="address">
                <img
                  className="address-icon"
                  src={locationIcon}
                  alt="Location icon."
                />
                <p className="address-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="phone">
                <img className="phone-icon" src={phoneIcon} alt="Phone icon." />
                <p className="phone-info">+1-543-123-4567</p>
              </div>
              <div className="email">
                <img className="email-icon" src={emailIcon} alt="Email icon." />
                <p className="email-info">example@huddle.com</p>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-link-set1">
              <p>About Us</p>
              <p>What We Do</p>
              <p>FAQ</p>
            </div>
            <div className="footer-link-set2">
              <p>Career</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="footer-icons">
            <div className="footer-icon fb"></div>
            <div className="footer-icon twitter"></div>
            <div className="footer-icon insta"></div>
          </div>
        </div>
        <p className="copyright">
          &copy; Copyright 2018 Huddle. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;

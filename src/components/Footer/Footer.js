import React from "react";
import "./footer.css";
import img1 from "../../assets/img/icons/email.png";
import img2 from "../../assets/img/icons/FAQ.png";
import img3 from "../../assets/img/icons/smartphone.png";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ backgroundColor: "#FFC727" }}>
        <div className="tap">
          <span>
            <img src={img3} alt="phonenumber" />
            <p>(+91) 8849951310</p>
          </span>
          <span>
            <img src={img1} alt="email" />
            <p>info@collabact.com</p>
          </span>
          <span>
            <img src={img2} alt="faq" />
            <p>FAQ</p>
          </span>
        </div>
      </div>
      <div className="grayTap">
        <p className="mindes">
          Become a mediator, and connect to right company with right candidate,
          to work together for development and ultimately have a Win-Win-Win
          situation wherein everyone grows.
        </p>
        <ul className="footerlist">
          <strong>ABOUT US</strong>
          <li>Our Story</li>
          <li>Our Team</li>
          <li>Career</li>
        </ul>
        <ul className="footerlist">
          <strong>RESOURCES</strong>
          <li>EBP</li>
          <li>EBL</li>
          <li>Support</li>
          <li>Blog</li>
        </ul>
        <ul className="footerlist">
          <strong>TERMS & CONDITIONS</strong>
          <li>Cookie Policy</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
        </ul>
        <div className="subscribeNews">
          <h5>SUBSCRIBE NEWS LETTER</h5>
          <span>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </span>
          <p>Get digital marketing updates in your mailbox</p>
        </div>
      </div>
      <div className="mobfooter">
        <div className="footerSocial">
          <BsFacebook />
          <RiInstagramFill />
          <AiFillLinkedin />
          <AiFillTwitterCircle />
        </div>
        <p>
            <span>Terms | Privacy</span>
            Copyright © 2010-2022 Collabact All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

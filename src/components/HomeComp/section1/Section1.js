import React from "react";
import "./section1.css";
import img1 from "../../../assets/img/banner/img1.png";
import icon1 from "../../../assets/img/icons/img1.png";
import icon2 from "../../../assets/img/icons/img2.png";
import icon3 from "../../../assets/img/icons/img3.png";
import icon4 from "../../../assets/img/icons/img4.png";
import icon5 from "../../../assets/img/icons/img5.png";
import icon6 from "../../../assets/img/icons/img6.png";
import icon7 from "../../../assets/img/icons/img7.png";
import icon8 from "../../../assets/img/icons/img8.png";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Section1 = () => {
  return (
    <div>
      <section className="homeSection1">
        <div className="homebanner">
          <img src={img1} alt="weConnect" />
          <div className="bannerHeading">
            <h1>We Connect</h1>
            <h2>Commissioned Sales Partners</h2>
            <h2>with Businesses</h2>
            <h2>to grow Exponentially</h2>
          </div>
        </div>
        <div className="headerSocial">
          <AiOutlineFacebook />
          <AiOutlineLinkedin />
          <AiOutlineInstagram />
          <FiTwitter />
        </div>
        <div className="advantage">
          <h5>Advantages of associating with CollabAct</h5>
          <div className="adcardContainer">
            <div className="adcard">
              <h6>Businesses</h6>
              <i style={{ backgroundColor: "#0D72B8" }}>
                <img src={icon8} alt="img" />
                <AiFillYoutube />
              </i>
              <div>
                <strong>Global Sales</strong>
                <hr />
                <strong>Performance-based partners</strong>
                <hr />
                <strong>Low Expense, Increased Revenue</strong>
              </div>
              <button className="adb1">JOIN US</button>
            </div>
            <div className="adcard">
              <h6>Sales Partners</h6>
              <i style={{ backgroundColor: "#FFC114" }}>
                <img src={icon8} alt="img" />
                <AiFillYoutube />
              </i>
              <div>
                <strong>Flexible work Hours</strong>
                <hr />
                <strong>Commission-Based partnerships</strong>
                <hr />
                <strong>Zero investment & Unlimited income</strong>
              </div>
              <button className="adb2">
                <span>FREE</span> Registrations
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="homeSection2">
        <div>
          <h3>Get started!</h3>
          <h2>
            With India's Fastest Growing <br /> Collaboration Platform
          </h2>
          <p>
            For Businesses, CollabAct connects Commission-based Sales Partners
            who become their extended hand and help them expand their businesses
            in PAN India. And for the Sales Partners, we offer established
            companies whose products/services they can sell without any
            investment.
          </p>
          <button>Discover more</button>
        </div>
      </section>
      <section className="homeSection3">
        <div className="industrySegment">
          <span></span>
          <h2>
            Various <strong>Industry segments</strong>
          </h2>
          <div className="industrySegmentGrid">
            <div className="segmentCard">
              <img src={icon7} alt="1" />
              <ul>
                <h5>Automobile and electric vehicle</h5>
                <li>Spare Parts & Equipments</li>
                <li>Accessories</li>
                <li>Electric Vehicles</li>
                <li>Fittings & Components</li>
                <li>Commercial Vehicles</li>
                <li>Battery</li>
              </ul>
            </div>
            <div id="sepSegment" className="segmentCard">
              <div className="b1">
                <img src={icon6} alt="2" />
                <ul>
                  <h5>Industrial Products</h5>
                  <li>Engineering Machines</li>
                  <li>Tools & equipments</li>
                  <li>Industrial Supplies</li>
                </ul>
              </div>
              <div className="b1">
                <img src={icon5} alt="2" />
                <ul>
                  <h5>Fabric and Textiles</h5>
                  <li>Apparel, Clothing & Garments</li>
                  <li>Cotton, Wool Textiles & Fabrics</li>
                </ul>
              </div>
            </div>
            <div className="segmentCard">
              <img src={icon7} alt="3" />
              <ul>
                <h5>Business Services</h5>
                <li>Software, Technology, or IT</li>
                <li>Training, Coaching Consulting</li>
                <li>Human Resource & Legal</li>
                <li>Event Planning</li>
                <li>Insurance</li>
                <li>Advertisement & Media Support</li>
              </ul>
            </div>
            <div className="segmentCard">
              <img src={icon4} alt="4" />
              <ul>
                <h5>Building construction and home products</h5>
                <li>Architectural & Civil Engineering</li>
                <li>Furniture & Supplies</li>
                <li>Ceramic & Flooring</li>
                <li>Home Decor</li>
                <li>Electronics & Electrical Goods</li>
              </ul>
            </div>
            <div className="segmentCard">
              <img src={icon3} alt="5" />
              <ul>
                <h5>Energy and Enviornment</h5>
                <li>Paper & Paper products</li>
                <li>Solar Products</li>
                <li>Water Treatment</li>
                <li>Air Cleaning</li>
                <li>Waste Management</li>
              </ul>
            </div>
            <div className="segmentCard">
              <img src={icon5} alt="6" />
              <ul>
                <h5>Hospital and medical equipments</h5>
                <li>Hospital Set-up Equipments</li>
                <li>Healthcare Products</li>
                <li>Food Supplements</li>
                <li>Medical Safety & protective Gears</li>
              </ul>
            </div>
            <div className="segmentCard">
              <img src={icon2} alt="7" />
              <ul>
                <h5>Agriculture</h5>
                <li>Food & Beverages</li>
                <li>Agro Machinery & Equipments</li>
                <li>Seeds & Plantation Products</li>
                <li>Fertilisers & Soil Additives</li>
              </ul>
            </div>
            <div className="segmentCard">
              <img src={icon3} alt="8" />
              <ul>
                <h5>Franchises</h5>
                <li>Sports & Fitness</li>
                <li>Laboratories</li>
                <li>Travel & Tourism</li>
                <li>Education</li>
              </ul>
            </div>
            <div className="segmentCard">
              <img src={icon1} alt="9" />
              <ul>
                <h5>Fast Moving Consumer Goods (FMCG)</h5>
                <li>Food & Beverages</li>
                <li>Stationery</li>
                <li>Gifting</li>
                <li>Books & Toys</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;

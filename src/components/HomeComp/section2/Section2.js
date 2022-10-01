import React, { useEffect, useState } from "react";
import "./section2.css";
import img1 from "../../../assets/img/banner/img2.png";
import img2 from "../../../assets/img/icons/img9.png";
import img3 from "../../../assets/img/banner/img3.png";
import img4 from "../../../assets/img/logo/sirvideo.png";
import { data } from "./data";
import Carousel from "react-multi-carousel";
import { Ecbdesk, Ecbtab, Ecbmob } from "./carousels";
import "react-multi-carousel/lib/styles.css";

const Section2 = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 400, min: 100 },
      items: 1,
    },
  };
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div>
      <section className="encashyourbusines">
        <h3>Encash our businesses</h3>
        {windowSize.innerWidth > 900 ? <Ecbdesk data={data} /> : ""}
        {900 > windowSize.innerWidth && 600 < windowSize.innerWidth ? (
          <Ecbtab data={data} />
        ) : (
          ""
        )}
        {600 > windowSize.innerWidth ? <Ecbmob data={data} /> : ""}
      </section>

      <section className="espsection">
        <div className="esp">
          <h3>
            Willing to become Executive Sales Partner(ESP) ? Follow these simple
            steps!
          </h3>
          <img src={img1} alt="esp" />
          <span></span> {/* Do not remove this span */}
        </div>
      </section>

      <section className="event">
        <div className="eventContainer">
          <div className="upcomingevent">
            <span className="eventheader">
              <h3>
                Upcoming <strong>Events</strong>
              </h3>
              <hr className="eventheaderhr1" />
            </span>
            <Carousel
              infinite={true}
              responsive={responsive}
              arrows={false}
              showDots={true}
              renderDotsOutside
              className="eventCarousel"
            >
              <div className="eventcard">
                <strong>Upgrade sessions for Entrepreneurship</strong>
                <p>Every Friday at 8 pm</p>
              </div>
              <div className="eventcard">
                <strong>Upgrade sessions for Entrepreneurship</strong>
                <p>Every Friday at 8 pm</p>
              </div>
              <div className="eventcard">
                <strong>Upgrade sessions for Entrepreneurship</strong>
                <p>Every Friday at 8 pm</p>
              </div>
              <div className="eventcard">
                <strong>Upgrade sessions for Entrepreneurship</strong>
                <p>Every Friday at 8 pm</p>
              </div>
            </Carousel>
          </div>
          <div className="vedios">
            <span className="eventheader">
              <h3>
                <strong>What</strong> our Business Say
              </h3>
              <hr className="eventheaderhr2" />
            </span>
            <div className="popup">
              <img src={img4} alt="" />
              <p>
                Lorem ipsum dolor sit amet, sonsectetur adipiscing elit. Donee
                hendrerit vehicular est, in consequat.
              </p>
              <span></span> {/* Don't remove this span */}
            </div>
            <div className="user">
              <img src={img2} alt="author" />
              <div>
                <h4>Mr. Parag Shah</h4>
                <h5>Ahmedabad</h5>
                <p>Director, TriQuench India Pvt. Ltd.</p>
              </div>
            </div>
          </div>
        </div>
        <img className="worldmap" src={img3} alt="worldmap" />
      </section>
    </div>
  );
};

export default Section2;

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

import React, {useEffect, useState} from 'react';
import "./section2.css";
import img1 from "../../../assets/img/banner/img2.png";
import { data } from "./data"

import { Ecbdesk, Ecbtab, Ecbmob } from "./carousels"
import "react-multi-carousel/lib/styles.css";

const Section2 = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div>
      <section className="encashyourbusines">
        <h3>Encash our businesses</h3>
        {windowSize.innerWidth > 900 ? 
        <Ecbdesk data={data}/>
        : ""}
        {900 > windowSize.innerWidth && 600 < windowSize.innerWidth ? 
        <Ecbtab data={data}/>
        : ""}
        {600 > windowSize.innerWidth ? 
        <Ecbmob data={data}/>
        : ""}
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

      {/* upcoming event */}
    </div>
  );
};

export default Section2;

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
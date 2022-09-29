import React from "react";
import Carousel from "react-multi-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Ecbdesk = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 1,
    },
  };
  const CustomButtonGroup = ({ next, previous, carouselState }) => {
    const { currentSlide } = carouselState;
    return (
      <div className="custom-button-group-ecb">
        <button onClick={() => previous()}>
          <IoIosArrowBack />
        </button>
        <div>{currentSlide - 1} / 3</div>
        <button onClick={() => next()}>
          <IoIosArrowForward />
        </button>
      </div>
    );
  };
  return (
    <Carousel
      infinite={true}
      responsive={responsive}
      customButtonGroup={<CustomButtonGroup />}
      renderButtonGroupOutside
      arrows={false}
      className="ecbgridconainer"
    >
      <div className="ecbgrid">
        {data.slice(0, 9).map((item, index) => {
          return (
            <div key={index} className="ecbcard">
              <div className="ecbcardHeader">
                <img src={item.img} alt="" />
                <h4>{item.name}</h4>
              </div>
              <p>
                <strong>Product :</strong>
                {item.product}
              </p>
              <p>
                <strong>Segment :</strong>
                {item.segment}
              </p>
              <div className="ecbcardfooter">
                <hr className="hr2" />
                <p>
                  <strong>Possible Earning Range</strong>
                </p>
                <p>
                  {item.minrate} - {item.maxrate} Rs/month
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ecbgrid">
        {data.slice(9, 18).map((item, index) => {
          return (
            <div key={index} className="ecbcard">
              <div className="ecbcardHeader">
                <img src={item.img} alt="" />
                <h4>{item.name}</h4>
              </div>
              <p>
                <strong>Product :</strong>
                {item.product}
              </p>
              <p>
                <strong>Segment :</strong>
                {item.segment}
              </p>
              <div className="ecbcardfooter">
                <hr className="hr2" />
                <p>
                  <strong>Possible Earning Range</strong>
                </p>
                <p>
                  {item.minrate} - {item.maxrate} Rs/month
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ecbgrid">
        {data.slice(18, 21).map((item, index) => {
          return (
            <div key={index} className="ecbcard">
              <div className="ecbcardHeader">
                <img src={item.img} alt="" />
                <h4>{item.name}</h4>
              </div>
              <p>
                <strong>Product :</strong>
                {item.product}
              </p>
              <p>
                <strong>Segment :</strong>
                {item.segment}
              </p>
              <div className="ecbcardfooter">
                <hr className="hr2" />
                <p>
                  <strong>Possible Earning Range</strong>
                </p>
                <p>
                  {item.minrate} - {item.maxrate} Rs/month
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Carousel>
  );
};

export default Ecbdesk;

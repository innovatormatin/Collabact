import React from "react";
import Carousel from "react-multi-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Ecbtab = ({ data }) => {
  const responsive = {
    tablet: {
      breakpoint: { max: 900, min: 500 },
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
        <div>{currentSlide - 1} / 5</div>
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
        {data.slice(0, 4).map((item, index) => {
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
        {data.slice(4, 8).map((item, index) => {
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
        {data.slice(8, 12).map((item, index) => {
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
        {data.slice(12, 16).map((item, index) => {
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
        {data.slice(16, 20).map((item, index) => {
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

export default Ecbtab;

import React from 'react'
import Carousel from "react-multi-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Ecbmob = ({data}) => {
  const responsive = {
    tablet: {
      breakpoint: { max: 600, min: 100 },
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
        <div>{currentSlide - 1} / 20</div>
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
        {data.map((item, index) => {
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
    </Carousel>
  );
}

export default Ecbmob
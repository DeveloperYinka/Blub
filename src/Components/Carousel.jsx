import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Resources/Carousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 100 },
    items: 1,
    slidesToSlide: 1,
  },
};

// Slider component that accepts images, captions, autoPlay, showDots, and imgStyle as props
const Slider = ({ images = [], captions = [], autoPlay = true, showDots = true, imgStyle = {} }) => {
  return (
    <div>
      <div  className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={autoPlay}
        swipeable={true}
        draggable={true}
        showDots={showDots}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        renderButtonGroupOutside={false}
        customButtonGroup={null}
      >
        {images.map((imageUrl, index) => (
          <div className="slider" key={index}>
            <img src={imageUrl.url} alt={`slide-${index}`} style={imgStyle} />
            {captions[index] && (
              <div className="caption" style={{ marginBottom: "10px", textAlign: "center" }}>
                {captions[index]}
              </div>
            )}
          </div>
        ))}
      </Carousel>
      </div>
    </div>
  );
};

export default Slider;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../commons/Card";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#d0d0d0" ,borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#d0d0d0",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}
 
function Carousel({data}) {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="hidden md:block bg-white  md:w-[385px]  rounded-md mx-8">
      <div className="text-lg font-semibold text-slate-600 pb-2">Quick Stories</div>
    <Slider {...settings}>
    <Card
          img={data&&data[1]?.imageUrl}
          title={data&&data[1]?.webTitle}
          url={data&&data[1]?.webUrl}
          description={data&&data[1]?.description}
        />
        <Card
          img={data&&data[2]?.imageUrl}
          title={data&&data[2]?.webTitle}
          url={data&&data[2]?.webUrl}
          description={data&&data[2]?.description}
        />
        <Card
          img={data&&data[3]?.imageUrl}
          title={data&&data[3]?.webTitle}
          url={data&&data[3]?.webUrl}
          description={data&&data[3]?.description}
        />

     
    </Slider>
    </div>
  );
}
export default Carousel;


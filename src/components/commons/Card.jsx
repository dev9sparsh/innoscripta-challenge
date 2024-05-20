import React from "react";

function Card({ img, title, description, url,date }) {
    const handleClick = () => {
        window.open(url, "_blank");
      };
  return (
    <div className="md:px-0 px-5 w-[385px] h-[450px]" onClick={(e) => {e.preventDefault(); handleClick()}}>
      <img
        src={img}
        onError={
            (e) => (e.target.src = "https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714521600&semt=ais")}
        alt="..."
        style={{ width: "100%", height: "200px" }}
      />
      <div>
        <div>
          <h5 className="text-sm font-bold mt-3 text-slate-600">
            {title ? title.length > 20 ? title.slice(0, 30) + "..." : title : "Lorem ipsum dolor sit amet, consectetur..."}
          </h5>
          <p className="text-sm mt-1 text-slate-600">
            {description
              ? description.length > 200
                ? description.slice(0, 70) + "..."
                : description
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, sint dolorum. Unde praesentium, quos facilis illum impedit ad, dolore itaque cupiditate iusto ipsum nihil nulla eveniet deleniti architecto voluptates alias!"}
          </p>
        </div>
        <button className="text-sm text-primary font-medium mt-2">Read more..</button>
        <div className="w-full text-slate-400 text-sm ">{date}</div>
      </div>
    </div>
  );
}

export default Card;

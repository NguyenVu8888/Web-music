import { useState, useEffect, useRef } from "react";

import "./Slide.css";
import imgEX1 from "../../../assets/img/album-iu.jpeg";
import imgEX2 from "../../../assets/img/avata.jpg";
import imgEX3 from "../../../assets/img/bg-ani.jpg";
import imgEX4 from "../../../assets/img/bg-iu2.jpg";
import imgEX5 from "../../../assets/img/mv-iu.jpg";
import imgEX6 from "../../../assets/img/mv-iu2.jpg";

// function Slide() {
//   const dataImage = [
//     { image: imgEX1 },
//     { image: imgEX2 },
//     { image: imgEX3 },
//     { image: imgEX4 },
//     { image: imgEX5 },
//     { image: imgEX6 },
//   ];

//   const [current, setCurrent] = useState(0);
//   const length = dataImage.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(dataImage) || dataImage.length <= 0) {
//     return null;
//   }

//   useEffect(() => {
//     setInterval(() => {
//      setCurrent(current === length - 1 ? 0 : current + 1);
//     }, 3000);
//   }, []);

//   return (
//     <>
//       <section className="slider">
//         <div className="direction">
//           <i
//             className="fas fa-chevron-circle-left left-arrow"
//             onClick={() => {
//               prevSlide();
//             }}
//           ></i>
//           <i
//             className="fas fa-chevron-circle-right right-arrow"
//             onClick={() => {
//               nextSlide();
//             }}
//           ></i>
//         </div>

//         {dataImage.map((slide, index) => {
//           return (
//             <div
//               className={index === current ? "slide active" : "slide"}
//               key={index}
//             >
//               {index === current && (
//                 <img src={slide.image} alt="travel image" className="image" />
//               )}
//             </div>
//           );
//         })}
//       </section>
//     </>
//   );
// }

function Slide(props) {
  // const dataImage = [
  //   { image: imgEX1 },
  //   { image: imgEX2 },
  //   { image: imgEX3 },
  //   { image: imgEX4 },
  //   { image: imgEX5 },
  //   { image: imgEX6 },
  // ];
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {props.data.map((image, index) => (
          <img className="slide" key={index} src={image.imageSong}></img>
        ))}
      </div>

      <div className="slideshowDots">
        {props.data.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slide;

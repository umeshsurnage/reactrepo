

import { useEffect, useState } from "react"

function Carausel(){
const [slide, setSlide]=useState(2)
let slider = ['/slider0.jpg','/slider1.jpg','/slider2.jpg']

useEffect(() => {
  const interval = setInterval(() => {
    setSlide((prevSlide) => (prevSlide + 1) % slider.length);
  }, 2000);

  return () => clearInterval(interval); // Cleanup function
}, []); // Empty dependency array to run effect only once on mount


function left() {
  setSlide((prevSlide) => (prevSlide - 1 + slider.length) % slider.length);
}

function right() {
  setSlide((prevSlide) => (prevSlide + 1) % slider.length);
}
// function left(){
//   if(slide > 1){
//     setSlide(slide-1)    
//   }else{
//     setSlide(slider.length-1)
//   }
// }

// function right(){  
//  if(slide<slider.length-1){
//   setSlide(slide+1)
//  }else{
//   setSlide(1)
//  }
// }

function img(){  
  return slider[slide]
}
  return <>
  <div className="wrapper2">
    <h1>Carousel</h1>
    <hr />
    <div className="Carousel">
    <div className="pre">
      <a href="#" onClick={left}><i class="fa-solid fa-circle-arrow-left"></i></a>
    </div>
    <div className="carousel-img">
      
    <p>Image :- {slide+1}</p>
    <img src={img()} alt="" />
    </div>
    <div className="next">
    
      <a href="#" onClick={right}><i class="fa-solid fa-circle-arrow-right"></i></a>      
    </div>  </div>
  </div>
  </>
}

export default Carausel









// import React, { useEffect, useState } from "react";

// function Carousel() {
//   const [slide, setSlide] = useState(0);
//   const slider = ['/slider0.jpg','/slider1.jpg','/slider2.jpg'];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlide((prevSlide) => (prevSlide + 1) % slider.length);
//     }, 2000);

//     return () => clearInterval(interval); // Cleanup function
//   }, []); // Empty dependency array to run effect only once on mount

//   function left() {
//     setSlide((prevSlide) => (prevSlide - 1 + slider.length) % slider.length);
//   }

//   function right() {
//     setSlide((prevSlide) => (prevSlide + 1) % slider.length);
//   }

//   function img() {
//     return slider[slide];
//   }

//   const translateValue = slide * -100; // Calculate translateX value for CSS

//   return (
//     <div className="wrapper2">
//       <h1>Carousel</h1>
//       <p>Image: {slide + 1}</p>
//       <hr />
//       <div className="Carousel">
//         <div className="pre">
//           <a href="#" onClick={left}>
//             <i className="fa-solid fa-circle-arrow-left"></i>
//           </a>
//         </div>
//         <div className="overflow">
//           <div className="carousel-img" style={{ transform: `translateX(${translateValue}%)`, transition: "transform 0.5s ease" }}>
            
//             {slider.map((image, index) => (
//               <img key={index} src={image} alt="" />
//             ))}
//           </div>
//         </div>
//         <div className="next">
//           <a href="#" onClick={right}>
//             <i className="fa-solid fa-circle-arrow-right"></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;

// TO DO 
// SCROLL TO TOP BUTTON 
import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { IoIosArrowUp } from "react-icons/io";
import "../../styles/scrollToTop.scss";


const ScrollToTop = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // const toggleVisibility = () => {
  //   if (window.pageYOffset > 100) {
  //     console.log(window.pageyOffset);
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  function scrollToTop() {
    scroll.scrollToTop();
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility);
  //   console.log('hello world');
  // }, []);

  // window.addEventListener("wheel", console.log('helloworld'));

  return (
    <div className="up-arrow">
      {/* {isVisible && 
        <div>
          <img src={arrowIcon} alt="up-arrow" onClick={() => scrollToTop()}></img>
        </div>
      } */}
      <div onClick={() => scrollToTop()}>
        <IoIosArrowUp 
          className="arrow"
        />
      </div>
    </div>
  )
}

export default ScrollToTop;
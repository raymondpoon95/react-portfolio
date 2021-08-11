import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { IoIosArrowUp } from "react-icons/io";
import "../../styles/scrollToTop.scss";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  function scrollToTop() {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    }
  },[]);

  return (
    <div className="up-arrow">
      {isVisible ? 
        <div onClick={() => scrollToTop()}>
          <IoIosArrowUp 
            color="#008c8c"
            className="arrow"
          />
        </div> : null
      }
    </div>
  )
}

export default ScrollToTop;
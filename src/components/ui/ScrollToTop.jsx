// TO DO 
// SCROLL TO TOP BUTTON 

import React, { useEffect, useState } from "react";
import arrowIcon from "../../assets/icons/up-arrow.svg";
import "../../styles/scrollToTop.scss";
import { ReactComponent as ArrowIcon} from "../../assets/icons/up-arrow.svg";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      console.log(window.pageyOffset);
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility);
  //   console.log('hello world');
  // }, []);

  window.addEventListener("wheel", console.log('helloworld'));

  return (
    <div className="up-arrow">
      {isVisible && 
        <div onClick={scrollToTop}>
          <img src={arrowIcon} alt="up-arrow" onClick={scrollToTop}></img>
        </div>
      }
    </div>
  )
}

export default ScrollToTop;
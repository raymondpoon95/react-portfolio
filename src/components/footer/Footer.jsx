import React from "react";
import "../../styles/footer.scss";
import Data from "../../../src/data";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
        <p>Made with 💙 by Raymond Poon</p>
      </div>
      <div className="right">
        {Data.social.map((current) => {
          return (
            <a 
              href={current.link}
              target="_blank" 
              rel="noopener noreferrer"
              key={current.id}
            >
              <img src={current.img} alt={current.info}></img>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Footer;
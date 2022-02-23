import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/raymondwpoon/">
        <div>
          <BsLinkedin />
        </div>
      </a>

      <a href="https://github.com/raymondpoon95">
        <div>
          <FaGithub />
        </div>
      </a>

      <a href="https://www.instagram.com/raymondpoon_/">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;

import "../../styles/navbar.scss";
import React, {Component} from "react";
import { withGetScreen } from 'react-getscreen';

class NavBar extends Component {
  renderNavLinks() {
    if(this.props.isMobile()) {
      // CREATE A BURGER MENU FOR MOBILE
      return null;
    }
    
    return (
      <div className="navLinks">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    )
  };

  render() {
    return (
      <div className="navbar">
        <div className="wrapper">
          <a href="/" className="logoTitle">Raymond Poon</a>
            {this.renderNavLinks()}
        </div>
      </div>
    );
  }
}

export default withGetScreen(NavBar);
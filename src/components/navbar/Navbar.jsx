import "../../styles/navbar.scss";
import React, { Component } from "react";
import { withGetScreen } from 'react-getscreen';
import Data from "../../data";
import { FaBars, FaTimes } from "react-icons/fa";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navClicked: false,
    }
  }

  handleOnClick() {
    this.setState({ navClicked: !this.state.navClicked });
  }

  isMoblieNav() {
    if (this.props.isMobile() || (window.innerWidth >= 768 && window.innerWidth <= 1024)) {
      return (
        <>
          <div className="menu-icon" onClick={() => this.handleOnClick()}>{this.renderIcon()}</div>
            <div className={this.state.navClicked ? "navbarMobileActive" : "navbarMobile"}>
              <ul>
                {Data.navbarItems.map((menu) => {
                  return (
                    <li key={menu.id}><a href={menu.link} onClick={()=>this.handleOnClick()}>{menu.title}</a></li>
                  )
                })}
              </ul>
            </div>
        </>
      )
    }
    return (
      <div className="navLinks">
        <ul>
          {Data.navbarItems.map((menu) => {
            return (
              <li key={menu.id}><a href={menu.link} onClick={()=>this.handleOnClick()}>{menu.title}</a></li>
            )
          })}
        </ul>
      </div>
    )
  }

  renderIcon() {
    if (this.props.isMobile()) {
      if (this.state.navClicked) {
        return <FaTimes size="2rem"/>
      }
      return <FaBars  size="2rem"/>
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      if (this.state.navClicked) {
        return <FaTimes size="3rem"/>
      }
      return <FaBars  size="3rem"/>
    }
    return null;
  }

  renderNavLinks() {
    return (
      <>
      <div className="navbar">
      </div>
        <div className="wrapper">
          <a href="/" className="logoTitle">Raymond Poon</a>
          {this.isMoblieNav()}
        </div>
      </>
    )
  };

  render() {
    return (
      <>
        {this.renderNavLinks()}
      </>
    );
  }
}

export default withGetScreen(NavBar);

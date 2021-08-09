import "../../styles/navbar.scss";
import React, { Component } from "react";
import { Link } from "react-scroll";
import Data from "../../data";
import { FaBars, FaTimes } from "react-icons/fa";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navClicked: false,
      width: window.innerWidth,
    }

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  handleOnClick() {
    this.setState({ navClicked: !this.state.navClicked });
  }

  renderIcon() {
    if (this.state.width >= 0 && this.state.width < 1280) {
      if (this.state.navClicked) {
        return <FaTimes size="2rem"/>
      }
      return <FaBars  size="2rem"/>
    } 
  }

  renderMoblieNav() {
    return (
      <>
        <div className="navbar"></div>
          <div className="wrapper">
            <a href="/" className="logoTitle">Raymond Poon</a>
              <div className="menu-icon" onClick={() => this.handleOnClick()}>{this.renderIcon()}</div>
                <div className={this.state.navClicked ? "navbarMobileActive" : "navbarMobile"}>
                  <ul>
                    {Data.navbarItems.map((menu) => {
                      return (
                        <Link to={menu.link} spy={true} smooth={true} duration={1000}>
                          <li key={menu.id}><a href={menu.link} onClick={()=>this.handleOnClick()}>{menu.title}</a></li>
                        </Link> 
                      )
                    })}
                  </ul>
                </div>
          </div>
      </>
    )
  }

  renderDesktopNav() {
    return (
      <>
        <div className="navbar"></div>
          <div className="wrapper">
            <a href="/" className="logoTitle">Raymond Poon</a>
            <div className="navLinks">
              <ul>
                {Data.navbarItems.map((menu) => {
                  return (
                    <Link to={menu.link} spy={true} smooth={true} duration={1000}>
                      <li key={menu.id}><a href={menu.link}>{menu.title}</a></li>
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>
      </>
    )
  }

  render() {
    if (this.state.width >= 0 && this.state.width < 1280) {
      return this.renderMoblieNav();
    }

    return this.renderDesktopNav();
  }
}

export default NavBar;

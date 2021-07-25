import "../../styles/intro.scss";
import Fade from "react-reveal/Fade";
import NavBar from "../navbar/Navbar";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <span><NavBar /></span>
      <div className="content">
        <Fade left={true} delay={500} distance="30px">
          <h1>
            Hi, my name is <span style={{color:'#008c8c'}}>Raymond</span>
            <br />
            I am a Frontend Developer. Engineer. Programmer. 🚀
          </h1>
        </Fade>
      </div>
    </div>
  );
}

export default Intro;
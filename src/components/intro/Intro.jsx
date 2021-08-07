import "../../styles/intro.scss";
import Fade from "react-reveal/Fade";

const Intro = () => {
  return (
    <div className="intro" id="intro">
        <Fade left={true} delay={500} distance="30px">
          <div className="content">
              <h1>
                Hi, my name is <span style={{color:'#008c8c'}}>Raymond</span>
                <br />
                I am a Frontend Developer. Engineer. Programmer. 🚀
              </h1>
              <span>
                <a href="resume/raymondPoonCV.pdf" target="_blank">Resume</a>
              </span>
          </div>
        </Fade>
    </div>
  );
}

export default Intro;
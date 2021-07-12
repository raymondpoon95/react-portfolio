import "../../styles/about.scss";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="content-container">
        <Fade left={true} delay={200} distance="30px">
          <div className="content">
            <h1>⚡</h1>
            <p>Crazy developer who wants to explore every tech stack</p>

            <h1>⚡</h1>
            <p>Interested in developing highly interactive Front end / User Interfaces for web applications</p>

            <h1>⚡</h1>
            <p>My current goal is to strengthen my programming fundamentals and improve my web development skills particularly in React and vanilla JavaScript</p>

            <h1>⚡</h1>
            <p>Develop highly interactive Front end / User Interfaces for web applications</p>
          </div>
        </Fade>
        <Fade right={true} delay={500} distance="30px" >
          <div className="skills">
            <p style={{display:'inline'}}>My tool stack </p>    
            <h2 style={{display:'inline'}}>🛠</h2>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;
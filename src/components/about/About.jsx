import "../../styles/about.scss";
import Data from "../../../src/data";
import Fade from "react-reveal/Fade";
import ScrollToTop from "../ui/ScrollToTop";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="">
        <div className="content-container">
          <Fade left={true} delay={200} distance="30px">
            <div className="left-side">
              <h1>⚡</h1>
              <p>Crazy developer who wants to explore every tech stack</p>

              <h1>⚡</h1>
              <p>Developing highly interactive Frontend / User Interfaces for web applications</p>

              <h1>⚡</h1>
              <p>Working to build more projects and to become more familiar with different tools and technology across frontend development</p>

              <h1>⚡</h1>
              <p>Current goal is to strengthen my programming fundamentals and improve my React and vanilla JavaScript skills</p>

            </div>
          </Fade>
          <Fade right={true} delay={500} distance="30px" >
          <div className="right-side">
            <p style={{"display":"inline", "fontWeight":"500"}}>My tool stack </p>    
            <h2 style={{display:'inline'}}>🛠</h2>
            <div className="skills-grid">
              {Data.skills.map((current) => {
                return (
                  <div className="skills" key={current.id}>
                    <img src={current.img} alt={current.info}></img>
                    <p>{current.info}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Fade>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default About;
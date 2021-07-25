import "../../styles/projects.scss";
import React, { Component } from "react";
import { withGetScreen } from 'react-getscreen';
import Data from "../../data";
import Fade from "react-reveal/Fade";
import { FaEye, FaCode, FaEyeSlash } from "react-icons/fa";

class Projects extends Component {
  renderGithubButton = (githubLink) => {
    if(!githubLink) {
      return (
        <button style={{cursor: "default"}}><FaEyeSlash size="1.2rem" style={{marginRight: "15px"}}/>Private code</button>
      )
    }

    return (
      <button onClick={()=> {
        window.open(
          githubLink,
          "_blank",
          "noopener noreferrer"
        );
      }}>
        <FaCode size="1.2rem" style={{marginRight: "15px"}}/>
        Source code
      </button>
    );
  }
  
  renderLiveLinkButton = (liveLink) => {
    if(!liveLink) return null;
    return (
      <button onClick={() => {
        window.open(
          liveLink,
          "_blank",
          "noopener noreferrer"
        );
      }}>
        <FaEye size="1.2rem" style={{marginRight: "15px"}}/>
        Preview
      </button>
    );
  }
  
  contentStyle = () => {
    if (this.props.isMobile() || this.props.isTablet()) return "contentMobile";
    return "content";
  }

  render() {
    return (
      <div>
        <div id="title"><h1>Projects</h1></div>
        <Fade bottom={true} delay={500} distance="30px">
          <div>
            <div className="projects" id="projects">
              {Data.project.map((project) => {
                return (
                  <div className="container">
                    <div className="item">
                      <img src={project.img} alt="img"></img>
                      <div className={this.contentStyle()} key={project.id}>
                        <h1>{project.title}</h1>
                        <p>{project.info}</p>
                        <div className="buttons">
                          {this.renderLiveLinkButton(project.liveLink)}
                          {this.renderGithubButton(project.gitLink)}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

// const Projects = () => {
//   const renderGithubButton = (githubLink) => {
//     if(!githubLink) return null;
//     return (
//       <button><FaCode size="1.2rem" style={{marginRight: "15px"}}/>Source code</button>
//     );
//     // window.open(
//     //   "https://github.com/raymondpoon95/react-portfolio",
//     //   "_blank",
//     //   "noopener noreferrer"
//     // );
//   }

//   const renderLiveLinkButton = (liveLink) => {
//     if(!liveLink) return null;
//     return (
//       <>
//         <button><FaEye size="1.2rem" style={{marginRight: "15px"}}/>Preview</button>
//       </>
//     );
//   }

//   const buttonStyle = (props) => {
//     if (props.isMobile()) return null;
//     return "buttons";
//   }

//   return (
//     <div>
//       <div id="title"><h1>Projects</h1></div>
//       <Fade bottom={true} delay={500} distance="30px">
//         <div>
//           <div className="projects" id="projects">
//             {Data.project.map((project) => {
//               return (
//                 <div className="container">
//                   <div className="item">
//                     <img src={project.img} alt="img"></img>
//                     <div className="content" key={project.id}>
//                       <h1>{project.title}</h1>
//                       <p>{project.info}</p>
//                       <div className={buttonStyle()}>
//                         {renderLiveLinkButton(project.liveLink)}
//                         {renderGithubButton(project.gitLink)}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </Fade>
//     </div>
//   );
// }

export default withGetScreen(Projects);
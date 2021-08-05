import "../../styles/contact.scss";
import Fade from "react-reveal/Fade";
import Footer from "../footer/Footer";
import emailImg from "../../assets/images/email.svg";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
        <Fade left={true} delay={500} distance="30px">
          <div className="container">
            <div className="left">
              <p>
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
              </p>
              <span>
                <a href="mailto:raymondpoon95@hotmail.co.uk">raymondpoon95@hotmail.co.uk
                <HiOutlineMail
                  size="2.5rem"
                  style={{marginLeft:"5px"}}
                />
                </a>
              </span>
            </div>
            <div className="right">
              <img src={emailImg} alt="email"></img>
            </div>
          </div>
        </Fade>
      <Footer />
    </div>
  );
}

export default Contact;
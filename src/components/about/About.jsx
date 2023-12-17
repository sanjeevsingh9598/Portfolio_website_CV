import { Component } from "react";
// import ME from "../../assets/me-about.jpg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import { AiOutlineLaptop } from "react-icons/ai";
import "./about.css";
class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              {/* <img src="me-about.jpg" alt="me" /> */}
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>2</small>
              </article>
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Projects</h5>
                <small>5+ Completed Projects</small>
              </article>
              <article className="about__card">
                <AiOutlineLaptop className="about__icon" />
                <h5>Company</h5>
                <small>Cognizant Technology Solutions </small>
              </article>
            </div>
            <p>
              I am Sanjeev Singh, I completed my graduation from University
              Institute Of Technology, Burdwan University.correctly working in
              Cognizant Technology Solutions as a software Engineering where i
              am working API & UI Scripting via Seleniunm tool, i worked on
              agile team were designing and excuting the automation script using
              Selenium, java Cucumber , jUnit Work with API and UI ,Automation
              with serenity BDD, Cross Browser Testing (Automation), Mobile
              browser Testing (Automation), created Jenkins job pipeline,
              maintain ALM.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

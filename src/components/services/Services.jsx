import { Component } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
class Services extends Component {
  render() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/API Automation Design Script Design</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Able to create and maintain API and UI script via selenium
                  tool
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Able to create crossbrowser UI Automation script</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Able to work on differet Automation framework </p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>React Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Able to create business portfolio webpage</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Able to create business commercial webpage</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Able to create business official webpage</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Able to create different type of WebPage via react js.</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
}

export default Services;

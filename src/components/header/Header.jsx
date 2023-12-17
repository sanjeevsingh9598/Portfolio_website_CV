import { Component } from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Sanjeev Singh</h1>
          <div className="text-green">Fullstack Developer</div>
          <CTA />
          <div className="me">
            <img src="profile pic" alt="ME" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
          <HeaderSocials />
        </div>
      </header>
    );
  }
}

export default Header;

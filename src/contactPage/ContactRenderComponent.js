import React from "react";
import { Link } from "react-router-dom";

import HeaderComponent from "../HeaderComponent.js";
import SaidbarComponent from "../SaidbarComponent.js";

class ContactRenderComponent extends React.Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <SaidbarComponent />
        <div className="contact">
          <div className="contact_title">
            <p>Contact Me</p>
            <div className="btn-main">
              <button className="contact_btn btn">
                <Link
                  to="/portfolio"
                  style={{ color: "#000", textDecoration: "none" }}
                  className="link"
                >
                  My Portfolio
                </Link>
              </button>
              <button className="contact_btn btn" style={{ margin: "0 10px" }}>
                <Link
                  to="/contact"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Contact Me
                </Link>
              </button>
              <button className="contact_btn btn">
                <Link
                  to="/about"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Aboute
                </Link>
              </button>
            </div>
            <hr />
          </div>
          <div className="contact_flex">
            <div className="contact_left">
              <p className="touch">Get in touch </p>
              <p>Email: name@domain.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit enim quo mollitia neque beatae quasi! Deleniti, quam
                dolores. Sit velit explicabo quasi esse, fuga rerum.
              </p>
            </div>
            <div className="contact_right">
              <form>
                <input type={"text"} placeholder="Name" className="name" />
                <input type={"email"} placeholder="Email" className="email" />
                <textarea className="message"></textarea>
                <button className="send">Send</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactRenderComponent;

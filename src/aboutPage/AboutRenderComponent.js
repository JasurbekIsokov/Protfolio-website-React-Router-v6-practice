import React from "react";
import { Link } from "react-router-dom";

import HeaderComponent from "../HeaderComponent.js";
import SaidbarComponent from "../SaidbarComponent.js";

class AboutRenderComponent extends React.Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <SaidbarComponent />
        <div className="about">
          <div className="about_title">
            <p>About</p>
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
          <div className="myself">
            <div className="myself_title">abit about my self</div>
            <div className="myself_text" style={{ marginBottom: "20px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              enim quo mollitia neque beatae quasi! Deleniti, quam dolores. Sit
              velit explicabo quasi esse, fuga rerum. Lorem ipsum, dolor sit
              amet consectetu
            </div>
          </div>
          <div className="work_tmline">
            <div className="work_title">Work Timline</div>
            <div className="list">
              <hr />
              <div className="li">
                <p>Designer of week</p>
                <p>Yadifi</p>
                <p>2020</p>
              </div>
              <hr />
              <div className="li">
                <p>Designer of week</p>
                <p>Jumalya</p>
                <p>2019</p>
              </div>
              <hr />
              <div className="li">
                <p>Designer of week</p>
                <p>Alquest</p>
                <p>2019</p>
              </div>
              <hr />
              <div className="li">
                <p>Designer of week</p>
                <p>Yadifi</p>
                <p>2020</p>
              </div>
              <hr />
              <div className="li">
                <p>Designer of week</p>
                <p>Jumalya</p>
                <p>2019</p>
              </div>
              <hr />
              <div className="li">
                <p>Designer of week</p>
                <p>Alquest</p>
                <p>2019</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutRenderComponent;

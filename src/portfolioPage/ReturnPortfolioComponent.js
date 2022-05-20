import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../HeaderComponent.js";
import SaidbarComponent from "../SaidbarComponent.js";

class ReturnPortfolioComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <SaidbarComponent />
        <div className="portfolio">
          <div className="title_portfolio">
            <p>Portfolio</p>
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
          <div className="cards">
            <div className="card1 card"></div>
            <div className="card2 card"></div>
            <div className="card3 card"></div>
          </div>
          <div className="cards">
            <div className="card4 card"></div>
            <div className="card5 card"></div>
            <div className="card6 card"></div>
          </div>
          <div className="cards">
            <div className="card7 card"></div>
            <div className="card8 card"></div>
            <div className="card9 card"></div>
          </div>
        </div>
      </>
    );
  }
}

export default ReturnPortfolioComponent;

import React from "react";
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

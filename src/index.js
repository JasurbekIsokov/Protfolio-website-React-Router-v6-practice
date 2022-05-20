import React from "react";
import ReactDOM from "react-dom";

import SaidbarComponent from "./SaidbarComponent.js";
import HeaderComponent from "./HeaderComponent.js";
import ReturnComponent from "./homePage/ReturnComponent.js";
import ReturnPortfolioComponent from "./portfolioPage/ReturnPortfolioComponent.js";
import AboutRenderComponent from "./aboutPage/AboutRenderComponent.js";
import ContactRenderComponent from "./contactPage/ContactRenderComponent.js";

import { Dropdown } from "./dropDown.js";

import "./style/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="window">
        <HeaderComponent />
        <SaidbarComponent />
        <div className="container">
          <ReturnComponent />
        </div>
        <ReturnPortfolioComponent />
        <AboutRenderComponent />
        <ContactRenderComponent />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

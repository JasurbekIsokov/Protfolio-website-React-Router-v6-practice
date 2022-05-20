import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReturnComponent from "./homePage/ReturnComponent.js";
import ReturnPortfolioComponent from "./portfolioPage/ReturnPortfolioComponent.js";
import AboutRenderComponent from "./aboutPage/AboutRenderComponent.js";
import ContactRenderComponent from "./contactPage/ContactRenderComponent.js";

import "./style/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ReturnComponent />}></Route>
          <Route
            path="/portfolio"
            element={<ReturnPortfolioComponent />}
          ></Route>
          <Route path="/about" element={<AboutRenderComponent />}></Route>
          <Route path="/contact" element={<ContactRenderComponent />}></Route>
        </Routes>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

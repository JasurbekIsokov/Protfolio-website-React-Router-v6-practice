import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      <BrowserRouter>
        <Routes>
          <div className="window">
            <div className="container">
              <Route path="/" element={<ReturnComponent />}></Route>
            </div>
            <Route
              path="/portfolio"
              element={<ReturnPortfolioComponent />}
            ></Route>
            <Route path="/about" element={<AboutRenderComponent />}></Route>
            <Route path="/contact" element={<ContactRenderComponent />}></Route>
          </div>
        </Routes>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

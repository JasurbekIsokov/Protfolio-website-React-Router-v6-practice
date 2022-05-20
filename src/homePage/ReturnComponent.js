import React from "react";

import HeaderComponent from "../HeaderComponent.js";
import SaidbarComponent from "../SaidbarComponent.js";

import MainComponent from "./MainComponent.js";

class ReturnComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <SaidbarComponent />
        <MainComponent />
      </div>
    );
  }
}

export default ReturnComponent;

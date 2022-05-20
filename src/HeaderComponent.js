import React from "react";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <p className="title">PLUX</p>
        <div className="toogle-mode"></div>
        <div className="navbar"></div>
      </div>
    );
  }
}

export default HeaderComponent;

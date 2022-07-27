import React, { Component } from "react";
import PopPop from "react-poppop";
import Button from "./Button";
import mainAd from "../assets/images/Frame1318.png";
import "./ShortContent.css";

export default class ShortContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  toggleShow = (show) => {
    this.setState({ show });
  };

  render() {
    const { show } = this.state;
    return (
      <div className="setting">
        <Button onClick={() => this.toggleShow(true)}>Short content</Button>
        <PopPop
          position="centerCenter"
          open={show}
          closeBtn={true}
          closeOnEsc={true}
          onClose={() => this.toggleShow(false)}
          closeOnOverlay={true}
        >
          <div style={{ textAlign: "center" }}>
            <img className="ad-size" src={mainAd} alt="ad" />
          </div>
        </PopPop>
      </div>
    );
  }
}

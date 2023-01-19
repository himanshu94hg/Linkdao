import React from "react";
// import planetImg from "./img/Box.png";
import planetImg from "./img/Box.svg";
import planetShadow from "./img/PlanetShadow.svg";
import "./index.scss";
import Transparent from "./img/transparent.svg";

const BannerGraphic = () => {
  return (
    <>
      <div id="orbit-system">
        <div className="system">
          <div className="satellite-orbit2"></div>
          <div className="satellite-orbit3">
            <div className="satellite">
              <a
                href="https://app.lkdius.com/launchpad"
                target="_blank"
                rel="noreferrer"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Transparent} alt="" />
              </a>
            </div>
            <div className="satellite3">
              <a
                href="https://app.lkdius.com/"
                target="_blank"
                rel="noreferrer"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Transparent} alt="" />
              </a>
            </div>
            <div className="satellite33">
              <a
                href="https://app.lkdius.com/bridge"
                target="_blank"
                rel="noreferrer"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Transparent} alt="" />
              </a>
            </div>
          </div>
          <div className="satellite-orbit4">
            <div className="satellite4">
              <a
                href="https://app.lkdius.com/earn"
                target="_blank"
                rel="noreferrer"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Transparent} alt="" />
              </a>
            </div>
            <div className="satellite44">
              <a
                className=""
                href="/governance"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Transparent} alt="" />
              </a>
            </div>
            <div className="satellite22"></div>
            <div className="satellite2">
              <a
                href="https://www.worldoflkdians.com/"
                target="_blank"
                rel="noreferrer"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Transparent} alt="" />
              </a>
            </div>
          </div>
          <div className="planet">
            <img src={planetImg} className="planet-image" alt="lkdPlanet" />
            <img src={planetShadow} className="planet-shadow" alt="lkdPlanet" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerGraphic;

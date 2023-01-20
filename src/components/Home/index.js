import React from "react";
import BannerGraphic from "../BannerGraphic";
import "./index.scss";
import SideImage from "../../assets/Cone.svg";
import ToolsPage from "../ToolsPage";
import Calculator from "../Calculator";
import Partners from "../Partners";
import LKDToken from "../LKDToken";
import Comet from "./Comet/Comet";
import HeroSlider from "./HeroSlider";
import { MdOutlineFileCopy } from "react-icons/md";

const Home = () => {
  const copyOnClick = () => {
    console.log("copied");
    navigator.clipboard.writeText("0xaF027427DC6d31A3e7e162A710a5Fe27e63E275F");
  };

  return (
    <>
      <div className="homepage main-wrapper container-fluid pl-0 pr-0 d-flex flex-column align-items-center gutterx">
        <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
          <div className="container-fluid main-hero">
            <Comet />
            <div className="container-lg">
              <div className="heading row">
                <div
                  className="col-12 col-lg-5 d-flex justify-content-lg-evenly justify-content-xl-evenly justify-content-inherit flex-column text-white ml-lg-4 pt-5 px-0 px-lg-2 marginhome"
                  style={{ zIndex: "999" }}
                >
                  <div className="d-grid gap-4">
                    <div>
                      <h1>DeFi's Cross-Chain</h1>
                      <h1>Liquidity Enabler Network</h1>
                    </div>
                    <p className="text-white">
                      Contract address:
                      <br />
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <a
                          href="https://bscscan.com/address/0xaf027427dc6d31a3e7e162a710a5fe27e63e275f#code"
                          target="_blank"
                          rel="noreferrer"
                          className="cAddress"
                          style={{
                            textDecoration: "none",
                            color: "#53e4e1",
                          }}
                        >
                          0xaF027427DC6d31A3e7e162A710a5Fe27e63E275F
                        </a>
                        <button
                          className="btn custom-tooltip"
                          onClick={copyOnClick}
                        >
                          <MdOutlineFileCopy />
                        </button>
                      </span>
                    </p>
                    <a
                      type="button"
                      className="btn filled-orange-btn d-flex align-items-center justify-content-center"
                      href="https://app.linkdao.network"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LAUNCH APP
                    </a>
                  </div>
                  <div
                    className={`sliderwrapper d-flex flex-column ${
                      window.innerWidth < 768 ? "mt-5" : "mt-3"
                    } pl-0`}
                  >
                    <HeroSlider />
                  </div>
                </div>
                <div className="col-12 col-lg-5 d-flex justify-content-center flex-column text-white ml-4">
                  <BannerGraphic />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid chainlink-wrapper">
            <div className="container-lg position-relative">
              <div className="row justify-content-between mt-5 gap-3">
                <div className="d-grid"></div>
                <div className="d-grid"></div>
                <div className="d-grid"></div>
              </div>
              <img src={SideImage} className="pin" alt="side" />
            </div>
          </div>
        </div>
        <div className="container-lg d-flex justify-content-center mb-4 mb-lg-0 mt-5">
          <Calculator />
        </div>

        <div className="container-lg d-flex justify-content-center mb-4 mb-lg-0">
          <LKDToken />
        </div>

        <div className="container-lg d-flex justify-content-center mb-4 mb-lg-0 ">
          <ToolsPage />
        </div>

        <div
          className="container-fluid"
          id="our-partners"
          style={{ padding: " 0px 30px" }}
        >
          <Partners />
        </div>
      </div>
    </>
  );
};

export default Home;
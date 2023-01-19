import React, { useEffect } from "react";
import "./index.scss";
import Layers from "../../assets/toolsPage/layers.svg";
import Graph from "../../assets/toolsPage/graph.svg";
import Token from "../../assets/toolsPage/token.svg";
import PurpleTriangle from "../../assets/toolsPage/Triangle.svg";
import Dapp from "../../assets/toolsPage/dapp.png";
// import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ToolsPage = () => {
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 785) {
      document.getElementById("pulse").classList.add("rotate-scale-up");
      document.getElementById("pulse").classList.remove("pulse");
    } else {
      document.getElementById("pulse").classList.remove("rotate-scale-up");
      document.getElementById("pulse").classList.add("pulse");
    }
  }, []);

  return (
    <>
      <div className="row lkd-tools">
        <div className="col-12 col-lg-5 ">
          <div className="gap-5 d-grid align-items-start justify-content-center pl-5 pt-5 pb-5 p-md-5 leftcol">
            <div className="gap-3 d-grid m-md-auto m-sm-auto m-lg-0">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="aos-init aos-animate"
              >
                <h1 className="metaverse">LKD Tools</h1>
                <h1>Powerful dApps</h1>
              </div>
              <div
                className="list-card d-flex flex-row align-items-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <img
                  src={Layers}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                />
                <p className="m-0">
                  A wide range of interactive, decentralized applications
                </p>
              </div>
              <div
                className="list-card d-flex flex-row align-items-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <img
                  src={Graph}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                />
                <p className="m-0">Access to real-time data analytics</p>
              </div>
              <div
                className="list-card d-flex flex-row align-items-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <img
                  src={Token}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                />
                <p className="m-0">
                  Review and support tokens from various promising projects
                </p>
              </div>
            </div>
            <a
              href="https://app.linkdao.network/"
              target="_blank"
              rel="noreferrer"
              className="btn d-flex align-items-center justify-content-center outline-btn m-md-auto m-sm-auto m-lg-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              style={{ width: "fit-content" }}
            >
              Go to LKD Tools
              <span style={{ marginLeft: "15px" }}>
                <HiOutlineArrowNarrowRight />
              </span>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center position-relative">
          <div id="pulse"></div>
          <img src={PurpleTriangle} className="triangle" alt="triangle" />
          <img className="iphone" src={Dapp} alt="" />
        </div>
      </div>
    </>
  );
};

export default ToolsPage;

import React from "react";
import "./index.scss";
// import Coin from "../../assets/coins/coin2.png";
import Coin from "../../assets/coins/Coin.svg";
import coinbg from "../../assets/coins/coinbg.svg";
import tokenCircle from "../../assets/coins/tokenCircle.svg";
import TokenSlider from "./TokenSlider";

const LKDToken = () => {
  return (
    <>
      <div className="row lkd-token justify-content-between">
        <div className="col-6 col-lg-3 blue-half order-2 order-lg-1">
          <img src={Coin} className="coin coinWidth" alt="" />
          <img src={coinbg} className="coin" alt="" />
          <img className="ring-1" src={tokenCircle} alt="" />
          <img className="ring-2" src={tokenCircle} alt="" />
        </div>
        <div className="token-info col-12 col-lg-6 d-flex justify-content-center align-items-end flex-column pr-3 pr-lg-5 order-1 order-lg-2">
          <div
            className="text-end aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="metaverse">LKD Token</h1>
            <h1>Empowering the future</h1>
          </div>
          <p
            className="text-end aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Explore the multiple possibilites with our unique token
          </p>
          {/* Slider */}
          <div className="row">
            <div style={{ width: "300px" }}>
              <div className="slick-slider slick-initialized">
                <TokenSlider />
              </div>
            </div>
          </div>
          {/*slide ends */}
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            className="btn filled-btn d-flex align-items-center aos-init aos-animate mt-4"
            href="https://linkdao-network.gitbook.io/linkdao/introduction/staking-and-earning"
            style={{ zIndex: "5" }}
            target="_blank"
            rel="noreferrer"
          >
            Learn more
          </a>
        </div>
      </div>
    </>
  );
};

export default LKDToken;

import React, { useCallback, useEffect, useState } from "react";
import "./index.scss";
import "../ToolsPage/index.scss";
// import CalculatorBg from "../../assets/CalculatorBg.svg";
// import LineGraph from "../../assets/line-graph.svg";
import Sphere from "../../assets/Sphere.svg";
import { IoIosArrowForward } from "react-icons/io";
import { getPrice } from "../../utils";

const Calculator = () => {
  const [usdToDeposit, setUsdToDeposit] = useState(1000);
  const [days, setDays] = useState(30);
  const [price, setPrice] = useState();
  const [percentage, setPercentage] = useState(0.03);
  const [pool, setPool] = useState(false);

  const handleInputUSD = (e) => {
    setUsdToDeposit(e.target.value);
  };
  const handleInputDays = (e) => {
    setDays(e.target.value);
  };

  // const apiUrl = "https://api.linkdao.network/api/tokenPrice";

  // const getPrice = async () => {
  //   const response = await axios.get(apiUrl);
  //   return response.data.data;
  // };

  const handlePrice = useCallback(async () => {
    let pr = await getPrice();
    setPrice(pr);
  }, []);

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <div className="position-relative calculator-inner overlow-hidden">
        <div className="row lkd-metaverse justify-content-between gap-2 gap-sm-0">
          <div className="col-12 col-lg-7 col-md-7 col-sm-6 order-2 order-md-1">
            <div className="elevated-container form mr-lg-4">
              <form>
                <div className="row">
                  <div className="p-md-0 col-12">
                    <h2
                      style={{ color: "rgb(85, 79, 216)" }}
                      className="mb-4 fw-bolder"
                    >
                      Staking
                    </h2>
                  </div>
                  <div className="p-md-0 col-12 pool">
                    {/* Eth button */}
                    {/* bsc button */}
                    {/* Avax button */}

                    <button
                      onClick={() => {
                        setPercentage(0.03);
                        setDays(30);
                        setPool(false);
                      }}
                      type="button"
                      className={`btn btn-outlin ${
                        pool === true ? "" : "activeBtn"
                      } px-4`}
                    >
                      Pool A1
                    </button>
                    <button
                      onClick={() => {
                        setPercentage(0.02);
                        setDays(30);
                        setPool(true);
                      }}
                      type="button"
                      className={`btn btn-outlin ${
                        pool === true ? "activeBtn" : ""
                      } mx-3 px-4`}
                    >
                      Pool B
                    </button>
                  </div>
                </div>
                <div className="row price-row">
                  <div className="p-md-0 col-7 d-flex ">
                    <div className="price-box">
                      <span className="sub">Approx. Profit</span>
                      <span className="price">
                        ${parseFloat(usdToDeposit * percentage).toFixed(2)}
                        <span className="currency">USD</span>
                      </span>
                      <span className="sup">
                        (
                        {parseFloat(
                          (usdToDeposit * percentage) / price
                        ).toFixed(4)}
                        LKD)
                      </span>
                    </div>
                  </div>
                  <div className="p-0 col-5 d-flex align-items-end">
                    {/* <img src={LineGraph} alt="" /> */}
                  </div>
                </div>
                <div className="row inputs-row">
                  <div className="p-md-0 col-md-6 d-flex  ">
                    <div className="form-group">
                      <label style={{ background: "none" }}>
                        <span style={{ color: "(--text-gray-8b-nft)" }}>
                          USD to deposit
                        </span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="usd_to_deposit"
                        name="usd_to_deposit"
                        value={usdToDeposit}
                        onChange={handleInputUSD}
                      />
                    </div>
                  </div>
                  <div className="p-md-0 col-md-6">
                    <div className="form-group">
                      <label htmlFor="days" style={{ background: "none" }}>
                        <span style={{ color: "var(--text-gray-8b-nft)" }}>
                          Days
                        </span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="days"
                        name="days"
                        value={days}
                        onChange={(e) => handleInputDays(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="p-md-0 col-md-6 order-2 order-md-1 ">
                    <div className="cta-button-wrapper">
                      <a
                        href="https://app.linkdao.network/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn d-flex align-items-center justify-content-center filled-btn"
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <span>Earn now</span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="p-md-0 col-md-6 order-1- order-md-2 d-flex align-items-center daysBtn">
                    {/* daysbuttons */}
                    <button
                      onClick={() => {
                        setDays(30);
                        if (pool === true) {
                          setPercentage(0.02);
                        } else {
                          setPercentage(0.03);
                        }
                      }}
                      type="button"
                      className="btn btn-outline"
                    >
                      1 month
                    </button>
                    <button
                      onClick={() => {
                        setDays(90);
                        if (pool === true) {
                          setPercentage(0.06);
                        } else {
                          setPercentage(0.09);
                        }
                      }}
                      type="button"
                      className="btn btn-outline ms-2"
                    >
                      3 months
                    </button>
                    <button
                      onClick={() => {
                        if (pool === true) {
                          setPercentage(0.18);
                          setDays(270);
                        } else {
                          setPercentage(0.36);
                          setDays(360);
                        }
                      }}
                      type="button"
                      className="btn btn-outline ms-2"
                    >
                      {pool === true ? "9 months" : "1 year"}
                    </button>
                    <button
                      onClick={() => {
                        if (pool === true) {
                          setPercentage(0.36);
                          setDays(540);
                        } else {
                          setPercentage(0.72);
                          setDays(720);
                        }
                      }}
                      type="button"
                      className="btn btn-outline ms-2"
                    >
                      {pool === true ? "1.5 years" : "2 years"}
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="p-md-0 col">
                    <p className="form-info">
                      *This calculator is for informational purposes only.{" "}
                      <br /> Calculated yields assume that prices of the
                      deposited assets don't change.
                    </p>
                  </div>
                </div>{" "}
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-md-5 col-sm-6 position-relative calheading">
            <img className="sphere" src={Sphere} alt=""></img>

            <div className="d-flex justify-content-center flex-column">
              <div
                className="metaverse-title w-100 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1 className="metaverse fs-50">Calculate your</h1>
                <h1 className="fs-50 mt-2">
                  staking <span className="metaverse">yield</span>
                </h1>
              </div>
              <br />
              <p
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                className="aos-init aos-animate"
              >
                Choose your Recurring pool, deposit amount to calculate your
                earnings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;

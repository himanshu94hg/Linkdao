import React, { useCallback, useEffect, useState } from "react";
import BannerGraphic from "../BannerGraphic";
import "./index.scss";
import SideImage from "../../assets/Cone.svg";
import ToolsPage from "../ToolsPage";
import Calculator from "../Calculator";
import Partners from "../Partners";
import LKDToken from "../LKDToken";
import Comet from "./Comet/Comet";
// import HeroSlider from "./HeroSlider";
import { MdOutlineFileCopy } from "react-icons/md";
import { getPrice, getCirculatingSupply } from "../../funtions/utils";
import BlockSafuAudit from "../../assets/BlockSafu.svg";
import IndividualIntervalsExample from "./HeroSlider/Carousel";
import { data } from "../../data/pools";
import { totalStakedFunc } from "../../utils/helpers";


const Home = () => {
  const [price, setPrice] = useState();
  const [supply, setSupply] = useState();
  const [staked, setStaked] = useState(0);

  const hadleSupply = useCallback(async () => {
    let pr = await getCirculatingSupply();
    setSupply(pr);
  }, []);

  const handlePrice = useCallback(async () => {
    let pr = await getPrice();
    setPrice(pr);
  }, []);

  const handleTotalStaked = useCallback(async () => {
    let stk = data.map(async ({ pool, poolAbi }) => {
      let res = await totalStakedFunc(pool, poolAbi);
      return res;
    });
    let v1 = stk.reduce(async (v1, v2) => {
      let a = await v1;
      let b = await v2;
      return parseFloat(a) + parseFloat(b);
    }, 0);
    v1.then((res) => {
      setStaked(parseFloat(res.toFixed(3)));
    });
  }, []);

  useEffect(() => {
    handleTotalStaked();
    handlePrice();
    hadleSupply();
    window.scrollTo(0, 0);
  }, [handlePrice, hadleSupply, handleTotalStaked]);

  const copyOnClick = () => {
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
                      <h1 className="maxW-m">Liquidity Enabler Network</h1>
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
                    {/* <HeroSlider /> */}
                    <IndividualIntervalsExample />
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
              <div className="row justify-content-between mt-5 gap-3 align-items-center">
                <div className="d-grid firstGrid">
                  <div className="row chainlink-row m-0">
                    <div className="px-0">
                      <span
                        className="chainlink-data-title mb-3"
                        style={{ whiteSpace: "pre" }}
                      >
                        LKD Price
                      </span>
                      <div className="chainlink-cell">
                        <div className="d-flex align-items-baseline gap-2">
                          <span className="totalpaid-amount ms-2">{price}</span>
                          {/* <span className="totalpaid-token">ETH</span> */}
                        </div>
                      </div>
                    </div>{" "}
                    <div className="px-0">
                      <span
                        className="chainlink-data-title"
                        style={{ whiteSpace: "pre" }}
                      >
                        Circulating Supply
                      </span>
                      <div className="chainlink-cell">
                        <div className="d-flex align-items-baseline gap-2">
                          <span className="totalpaid-amount ms-2">
                            {parseFloat(supply).toFixed(2)}
                          </span>
                          {/* <span className="totalpaid-token">ETH</span> */}
                        </div>
                      </div>
                    </div>{" "}
                    <div className="px-0">
                      <span
                        className="chainlink-data-title"
                        style={{ whiteSpace: "pre" }}
                      >
                        LKD Staked
                      </span>
                      <div className="chainlink-cell">
                        <div className="d-flex align-items-baseline gap-2">
                          <span className="totalpaid-amount ms-2">
                            {staked}
                          </span>
                          {/* <span className="totalpaid-token">ETH</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-grid" style={{ width: "220px" }}>
                  <span
                    className="chainlink-data-title"
                    style={{ whiteSpace: "pre" }}
                  >
                    Total Value Locked
                  </span>
                  <div className="row chainlink-row">
                    <div className="chainlink-cell">
                      <div className="d-flex align-items-baseline gap-2">
                        <span className="totalpaid-amount">
                          <span style={{ fontSize: "26px", fontWeight: "300" }}>
                          ${parseFloat((price*staked).toFixed(3))}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-grid" style={{ gap: "10px", width: "220px" }}>
                  <div className="row audit">
                    <div className="audited-by-section-item">
                      <img src={BlockSafuAudit} alt="" />

                      <p className="audited-by-section-item-text"></p>
                    </div>
                  </div>
                </div>
              </div>

              <img src={SideImage} className="pin" alt="side" />
            </div>
          </div>
        </div>
        <div className="container-lg d-flex justify-content-center mb-4 mb-lg-0 my-5">
          <Calculator />
        </div>

        <div className="container-lg d-flex justify-content-center mb-4 mb-lg-0 my-5">
          <LKDToken />
        </div>

        <div className="container-lg d-flex justify-content-center mb-4 mb-lg-0 my-5">
          <ToolsPage />
        </div>

        <div
          className="container-fluid my-5"
          id="our-partners"
          // style={{ padding: " 0px 30px" }}
        >
          <Partners />
        </div>
      </div>
    </>
  );
};

export default Home;

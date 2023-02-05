import React, { useEffect, useState } from "react";
import "./index.scss";
import Coin from "../../assets/coins/Coin.svg";
import purplebg from "../../assets/purplebg.png";
import RightArrow from "../../assets/right-arrow.svg";
import Copybtn from "../../assets/Copybtn.svg";

const BuyLKD = () => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    setCopy(true);

    navigator.clipboard.writeText("0xaF027427DC6d31A3e7e162A710a5Fe27e63E275F");

    setTimeout(() => {
      setCopy(false);
    }, [2000]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container-fluid px-0 buylkdscreen">
        <div style={{ paddingTop: "10rem" }}>
          <div className="container-fluid buylkd-main-hero d-flex flex-column justify-content-lg-end justify-content-xl-end justify-content-center mb-5">
            <div className="container-lg px-0 d-flex justify-content-between align-items-center flex-column mt-5">
              <div className="container-lg d-flex justify-content-between align-items-center mb-5 px-0">
                <div className="col-12 col-lg-5 text-white d-flex flex-column gap-3 justify-content-lg-center justify-content-xl-center">
                  <div className="d-flex gap-1">
                    <h1 className="metaverse">Buy</h1>
                    <h1>LKD</h1>
                  </div>
                  <p className="text-secondary">
                    You can purchase our token through a variety of centralized
                    and decentralized exchanges.
                  </p>
                </div>
                <div className="col-9 col-lg-3 position-relative d-xl-block d-lg-block d-none">
                  <img className="buylkdcoin" src={Coin} alt="" />
                  <img className="backgroundbuylkd" src={purplebg} alt="" />
                </div>
              </div>
              <div className="row justify-content-center pb-5">
                <div className="col-12 col-lg-3 my-3">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img
                          src="/static/media/coinbase.99cf87ba0c2ab156792d.png"
                          alt=""
                          className="buylkdcard-logo"
                        />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">Coinbase</span>
                        </div>
                      </div>
                      <a
                        href="https://pro.coinbase.com/trade/LKD-USD"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 my-3">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img
                          src="/static/media/huobi.a3ae910c2269423ef82d.png"
                          alt=""
                          className="buylkdcard-logo"
                        />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">Huobi</span>
                        </div>
                      </div>
                      <a
                        href="https://www.huobi.com/en-us/exchange/lkd_usdt/"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 my-3">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img alt="" className="buylkdcard-logo" />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">KuCoin</span>
                        </div>
                      </div>
                      <a
                        href="https://www.kucoin.com/trade/LKD-USDT"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 my-3">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img alt="" className="buylkdcard-logo" />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">Gate.io</span>
                        </div>
                      </div>
                      <a
                        href="https://www.gate.io/zh/trade/LKD_USDT"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 my-3">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img alt="" className="buylkdcard-logo" />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">Poloniex</span>
                        </div>
                      </div>
                      <a
                        href="https://poloniex.com/spot/BTC_USDT"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 my-3">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img alt="" className="buylkdcard-logo" />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">MEXC</span>
                        </div>
                      </div>
                      <a
                        href="https://www.mexc.com/exchange/LKD_USDT"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 my-3">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img alt="" className="buylkdcard-logo" />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">Uniswap V2</span>
                        </div>
                      </div>
                      <a
                        href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 my-3">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img alt="" className="buylkdcard-logo" />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">
                            PancakeSwap V2
                          </span>
                        </div>
                      </div>
                      <a
                        href="https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 my-3">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img
                          src="/static/media/pangolin.00ec08409f1e129c1c0b.svg"
                          alt=""
                          className="buylkdcard-logo"
                        />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">Pangolin</span>
                        </div>
                      </div>
                      <a
                        href="https://app.pangolin.exchange/#/swap?&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 my-3">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img
                          src="/static/media/coin98.eabe6f76411d9477629b.png"
                          alt=""
                          className="buylkdcard-logo"
                        />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">Coin98</span>
                        </div>
                      </div>
                      <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 my-3">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img
                          src="/static/media/1Inch.610f677ebaddb96192de.png"
                          alt=""
                          className="buylkdcard-logo"
                        />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">1inch</span>
                        </div>
                      </div>
                      <a
                        href="https://app.1inch.io/#/1/swap/LKD/ETH"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 my-3">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img src="" alt="" className="buylkdcard-logo" />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">KyberSwap</span>
                        </div>
                      </div>
                      <a
                        href="https://kyberswap.com/swap/bnb/bnb-to-lkd"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="supportedwallet-wrapper container-lg mt-5 mb-5">
                <div>
                  <div className="row ml-0 mr-0 justify-content-lg-between justify-content-xl-between justify-content-md-between justify-content-end mb-xl-0 mb-lg-0 mb-2 align-items-center sw_col">
                    <h1 className="col">Supported wallets</h1>
                    <div className="col sw_col2">
                      <div className="row ml-0 mr-0 gap-2 align-items-center">
                        <div className="d-flex flex-column lkdaddr-wrapper ">
                          <span className="lkdcontractaddr">
                            LKD Contract Address :
                          </span>
                          <span className="contractaddr justify-content-center">
                            0xaF027427DC6d31A3e7e162A710a5Fe27e63E275F
                            {copy ? (
                              <span data-toggle="tooltip" title="Copied">
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{
                                    cursor: "pointer",
                                    marginTop: "-9px",
                                  }}
                                >
                                  <circle
                                    cx="8"
                                    cy="8"
                                    r="8"
                                    fill="#FFF"
                                  ></circle>
                                  <path
                                    d="M3.33594 8.06663L5.95609 10.6666L12.0026 4.66663"
                                    stroke="#544ED5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </span>
                            ) : (
                              <img
                                src={Copybtn}
                                alt=""
                                className="ml-2"
                                style={{ cursor: "pointer", marginTop: "-9px" }}
                                onClick={handleCopy}
                              />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row m-0 gap-3 my-5 justify-content-center">
                    <div className="walletitem">
                      <img
                        src="/static/media/coinbase.1561ab4c68ea851a11d1.svg"
                        alt=""
                        className="walletimg"
                      />
                      <span className="wallettitle">Coinbase</span>
                    </div>
                    <div className="walletitem">
                      <img
                        src="/static/media/metamask.c0ff663c4f2c39c234ac.svg"
                        alt=""
                        className="walletimg"
                      />
                      <span className="wallettitle">Metamask</span>
                    </div>
                    <div className="walletitem">
                      <img
                        src="/static/media/trustwallet.df5d041e8e4d8cd6b753.svg"
                        alt=""
                        className="walletimg"
                      />
                      <span className="wallettitle">Trust wallet</span>
                    </div>
                    <div className="walletitem">
                      <img
                        src="/static/media/coin98.374fe1c0f2421e4a6fd6.svg"
                        alt=""
                        className="walletimg"
                      />
                      <span className="wallettitle">Coin98</span>
                    </div>
                    <div className="walletitem">
                      <img
                        src="/static/media/safepal.00d0b3eabe07cbb0ff64.svg"
                        alt=""
                        className="walletimg"
                      />
                      <span className="wallettitle">SafePal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyLKD;

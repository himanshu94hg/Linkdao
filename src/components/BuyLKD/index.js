import React, { useEffect, useState } from "react";
import "./index.scss";
import Coin from "../../assets/coins/Coin.svg";
import purplebg from "../../assets/purplebg.png";
import RightArrow from "../../assets/right-arrow.svg";
import Copybtn from "../../assets/Copybtn.svg";
import PANCK from "../../assets/Partners/PANCK.svg";
import BITMRT from "../../assets/Partners/BITMRT.svg";
import LBNK from "../../assets/Partners/LBNK.svg";
import MetaMask from "../../assets/Wallets/metamask.svg";
import Autherium from "../../assets/Wallets/Autherium.svg";
import TrustWallet from "../../assets/Wallets/trustwallet.svg";
import WalletConnect from "../../assets/Wallets/WalletConnect.svg";
import BinanceChain from "../../assets/Wallets/BinanceChain.svg";

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
              <div
                className="row justify-content-center pb-5"
                style={{ width: "95%" }}
              >
                <div className="col-12 col-lg-4 my-5">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img src={PANCK} alt="" className="buylkdcard-logo" />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">PancakeSwap</span>
                        </div>
                      </div>
                      <a
                        href="https://pancakeswap.finance/swap?inputCurrency=0xaf027427dc6d31a3e7e162a710a5fe27e63e275f"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0 mt-3"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 my-5">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img src={BITMRT} alt="" className="buylkdcard-logo" />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">BitMart</span>
                        </div>
                      </div>
                      <a
                        href="https://www.bitmart.com/trade/en?layout=basic&symbol=LKD_USDT"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0 mt-3"
                      >
                        <div className="rightarrow-wrapper">
                          <img src={RightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 my-5">
                  <div className="buylkdcard-wrapper ">
                    <div className="row m-0 gap-2 justify-content-between align-items-center">
                      <div className="d-flex gap-2 p-0 align-items-center">
                        <img src={LBNK} alt="" className="buylkdcard-logo" />
                        <div className="d-flex flex-column gap-1">
                          <span className="buylkdcard-title">Lbank</span>
                        </div>
                      </div>
                      <a
                        href="https://www.kucoin.com/trade/LKD-USDT"
                        target="_blank"
                        rel="noreferrer"
                        className="pr-0 mt-3"
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
                            <span className="truncateAdd">
                              0xaF027427DC6d31A3e7e162A710a5Fe27e63E275F
                            </span>
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
                      <img src={MetaMask} alt="" className="walletimg" />
                      <span className="wallettitle">MetaMask</span>
                    </div>
                    <div className="walletitem">
                      <img src={TrustWallet} alt="" className="walletimg" />
                      <span className="wallettitle">Trust Wallet</span>
                    </div>
                    <div className="walletitem">
                      <img
                        src={WalletConnect}
                        alt=""
                        className="walletimg"
                        width={50}
                      />
                      <span className="wallettitle">WalletConnect</span>
                    </div>
                    <div className="walletitem">
                      <img
                        src={Autherium}
                        alt=""
                        className="walletimg"
                        width={35}
                      />
                      <span className="wallettitle">Autherium</span>
                    </div>
                    <div className="walletitem">
                      <img
                        src={BinanceChain}
                        alt=""
                        className="walletimg"
                        width={50}
                      />
                      <span className="wallettitle">Binance Chain</span>
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

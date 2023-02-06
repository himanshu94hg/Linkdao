import React from "react";
import "./index.scss";
import Pancake from "../../assets/Partners/PANCK.svg";
import BITMART from "../../assets/Partners/BITMRT.svg";
import LBANK from "../../assets/Partners/LBNK.svg";
import CMC from "../../assets/Partners/CMC.svg";
import COINGECO from "../../assets/Partners/COINGKO.svg";
import BLOCKSAFU from "../../assets/Partners/BLOCKSAFU.svg";
import DivinerProtocol from "../../assets/Partners/DivinerProtocol.svg";
import NFTB from "../../assets/Partners/NFTB.svg";
// import PINKSALE from "../../assets/Partners/PINKSALE.svg";
import ERAX from "../../assets/Partners/ERAX.svg";

const Partners = () => {
  return (
    <div className="container-lg d-flex flex-column justify-content-center align-items-center p-0 p-lg-3">
      <div className="row flex-column justify-content-center align-items-center gap-2">
        <div className="d-flex flex-row gap-2 justify-content-center">
          <h1 className="metaverse">Our</h1>
          <h1>Partners</h1>
        </div>
        <p className="text-secondary text-center mb-5">
          We are proud of our growing list of partners.
        </p>
      </div>
      <div className="row lkd-partners position-relative p-5 justify-content-center">
        <a
          href="https://pancakeswap.finance/swap?inputCurrency=0xaf027427dc6d31a3e7e162a710a5fe27e63e275f"
          target="_blank"
          rel="noreferrer"
        >
          <div className="partner_wrapper d-flex flex-column align-items-center justify-content-center">
            <img src={Pancake} alt="" />
            <p className="mb-0 text-dark">PancakeSwap</p>
          </div>
        </a>
        <a
          href="https://www.bitmart.com/trade/en?layout=basic&symbol=LKD_USDT"
          target="_blank"
          rel="noreferrer"
        >
          <div className="partner_wrapper d-flex flex-column align-items-center justify-content-center">
            <img src={BITMART} alt="" />
            <p className="mb-0 text-dark">BitMart</p>
          </div>
        </a>
        <a
          href="https://www.lbank.info/exchange/lkd/usdt"
          target="_blank"
          rel="noreferrer"
        >
          <div className="partner_wrapper d-flex flex-column align-items-center justify-content-center">
            <img src={LBANK} alt="" />
            <p className="mb-0 text-dark">LBank</p>
          </div>
        </a>
        <a
          href="https://coinmarketcap.com/currencies/linkdao-network/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="partner_wrapper d-flex flex-column align-items-center justify-content-center">
            <img src={CMC} alt="" />
            <p className="mb-0 text-dark text-wrap" style={{ maxWidth: "95%" }}>
              CoinMarketCap
            </p>
          </div>
        </a>
        <a
          href="https://www.coingecko.com/en/coins/linkdao"
          target="_blank"
          rel="noreferrer"
        >
          <div className="partner_wrapper d-flex flex-column align-items-center justify-content-center">
            <img src={COINGECO} alt="" />
            <p className="mb-0 text-dark">CoinGecko</p>
          </div>
        </a>
        <a
          href="https://blocksafu.com/blocksafu-scanner/56/0xaF027427DC6d31A3e7e162A710a5Fe27e63E275F"
          target="_blank"
          rel="noreferrer"
        >
          <div className="partner_wrapper d-flex flex-column align-items-center justify-content-center">
            <img src={BLOCKSAFU} alt="" />
            <p className="mb-0 text-dark">BlockSAFU</p>
          </div>
        </a>
        <a href="https://www.diviner.finance/" target="_blank" rel="noreferrer">
          <div className="partner_wrapper d-flex flex-column align-items-center justify-content-center">
            <img src={DivinerProtocol} alt="" />
            <p className="mb-0 text-dark">Diviner Protocol</p>
          </div>
        </a>
        <a href="https://nftb.io" target="_blank" rel="noreferrer">
          <div className="partner_wrapper d-flex flex-column align-items-center justify-content-center">
            <img src={NFTB} alt="" />
            <p className="mb-0 text-dark">NFTb</p>
          </div>
        </a>
        {/* <a
          href="https://www.pinksale.finance/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="partner_wrapper d-flex flex-column align-items-center justify-content-center">
            <img src={PINKSALE} alt="" />
            <p className="mb-0 text-dark">PinkSale</p>
          </div>
        </a> */}
        <a href="https://erax.io/" target="_blank" rel="noreferrer">
          <div className="partner_wrapper d-flex flex-column align-items-center justify-content-center">
            <img src={ERAX} alt="" />
            <p className="mb-0 text-dark">ERAX</p>
          </div>
        </a>
      </div>
      <div className="w-100 d-flex justify-content-center align-items-center">
        {/* <div className="btn outline-btn d-flex justify-content-center align-items-center position-absolute load-more">
          Load More
        </div> */}
      </div>
    </div>
  );
};

export default Partners;

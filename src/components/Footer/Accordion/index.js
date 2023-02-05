import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import coinMarketCap from "../../../assets/Social/coinMarketCap.svg";
import coinGecko from "../../../assets/Social/coinGecko.svg";
import disclaimer from "../../../assets/Social/disclaimer.svg";
import { Link } from "react-router-dom";

const Accordion = () => {
  return (
    <>
      <div className="accordion w-100" id="accordionFooter">
        <div className="col-12 col-lg-3 text-white d-flex flex-column gap-3 px-0 py-3">
          <div
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="fw-normal">About Us</h4>
              <IoIosArrowForward />
            </div>
          </div>
          <div
            id="collapseOne"
            className="collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionFooter"
          >
            <div className="d-flex flex-column gap-3">
              {/* <a
                className="text-white text-decoration-none footer-type-link"
                href="/"
              >
                <h5>Our partners</h5>
              </a> */}

              <a
                className="text-white text-decoration-none footer-type-link"
                href="https://linkdao-network.gitbook.io/linkdao/protocol/roadmap"
              >
                <h5>Roadmap</h5>
              </a>
              <a
                className="text-white text-decoration-none footer-type-link"
                href="https://linkdao-network.gitbook.io/linkdao/development/security"
              >
                <h5>Security</h5>
              </a>
              <a
                className="text-white text-decoration-none footer-type-link"
                href="https://linkdao-network.gitbook.io/linkdao/protocol/tokenomics"
              >
                <h5>Tokenomics</h5>
              </a>
              <a
                className="text-white text-decoration-none footer-type-link"
                href="https://linkdao-network.gitbook.io/linkdao/contacts/contacts"
              >
                <h5>Contact us</h5>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="col-12 col-lg-3 text-white d-flex flex-column gap-3 px-0 py-3">
          <div
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="fw-normal">Solutions</h4>
              <IoIosArrowForward />
            </div>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionFooter"
          >
            <div className="row">
              <div className="col-12 d-flex flex-column gap-3">
                <a
                  href="https://linkdao-network.gitbook.io/linkdao/introduction/staking-and-earning"
                  className="text-white text-decoration-none footer-type-link"
                >
                  <h5>Earn</h5>
                </a>
                <a
                  href="/"
                  className="text-white text-decoration-none footer-type-link"
                >
                  <h5>LKD Tools</h5>
                </a>

                <Link
                  className="text-white text-decoration-none footer-type-link"
                  to="/BuyLKD"
                >
                  <h5>Buy LKD</h5>
                </Link>
                <a
                  className="text-white text-decoration-none footer-type-link"
                  href="https://linkdao-network.gitbook.io/linkdao/introduction/lets-get-started"
                >
                  <h5>LKD Token</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="col-12 col-lg-3 text-white d-flex flex-column gap-3 px-0 py-3">
          <div
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
          >
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="fw-normal">Learn</h4>
              <IoIosArrowForward />
            </div>
          </div>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionFooter"
          >
            <div className="d-flex flex-column gap-3">
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-white text-decoration-none footer-type-link"
              >
                <h5>How to buy LKD</h5>
              </a>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-white text-decoration-none footer-type-link"
              >
                <h5>How to Stake</h5>
              </a>
              {/* <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-white text-decoration-none footer-type-link"
              >
                <h5>How to Farm</h5>
              </a> */}
            </div>
          </div>
        </div>
        <hr />

        <hr />
        <div className="d-flex flex-row gap-3 position-relative mt-3">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://coinmarketcap.com/currencies/linkdao-network/"
          >
            <img src={coinMarketCap} alt="" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.coingecko.com/en/coins/linkdao"
          >
            <img src={coinGecko} alt="" />
          </a>
          <Link to="/disclaimer">
            <img src={disclaimer} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Accordion;

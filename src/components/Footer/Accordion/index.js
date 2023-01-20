import React from "react";
import { IoIosArrowForward } from "react-icons/io";

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
              <a
                className="text-white text-decoration-none footer-type-link"
                href="/"
              >
                <h5>Our partners</h5>
              </a>

              <a
                className="text-white text-decoration-none footer-type-link"
                href="/"
              >
                <h5>Roadmap</h5>
              </a>
              <a
                className="text-white text-decoration-none footer-type-link"
                href="/"
              >
                <h5>Security</h5>
              </a>
              <a
                className="text-white text-decoration-none footer-type-link"
                href="/"
              >
                <h5>Tokenomics</h5>
              </a>
              <a
                className="text-white text-decoration-none footer-type-link"
                href="/"
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
                  href="/"
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

                <a
                  className="text-white text-decoration-none footer-type-link"
                  href="/"
                >
                  <h5>Buy LKD</h5>
                </a>
                <a
                  className="text-white text-decoration-none footer-type-link"
                  href="/"
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
            <img
              src="/static/media/coinMarketCap.5ba639eb0400acb0ad911140c7d768c8.svg"
              alt=""
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.coingecko.com/en/coins/linkdao"
          >
            <img
              src="/static/media/coinGecko.032c651f97ccfff8722c41e2918cae0e.svg"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="/static/media/disclaimer.02b1b6198e9d2ef834f1bb8374337156.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Accordion;

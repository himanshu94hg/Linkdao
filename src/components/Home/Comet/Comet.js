import React from "react";
import "./Comet.scss";
import CometImg1 from "../../../assets/Comet/Comet1.svg";
import CometImg2 from "../../../assets/Comet/Comet2.svg";
import CometImg3 from "../../../assets/Comet/Comet3.svg";
import CometImg4 from "../../../assets/Comet/Comet4.svg";
import CometImg5 from "../../../assets/Comet/Comet5.svg";
import CometImg6 from "../../../assets/Comet/Comet6.svg";
import CometImg7 from "../../../assets/Comet/Comet7.svg";
import CometImg8 from "../../../assets/Comet/Comet8.svg";
import CometImg9 from "../../../assets/Comet/Comet1.svg";
import CometImg10 from "../../../assets/Comet/Comet1.svg";

const Comet = () => {
  return (
    <>
      <div className="position-relative">
        <div className="comet">
          <img src={CometImg1} alt="comet" />
        </div>
        <div className="comet">
          <img src={CometImg2} alt="comet" />
        </div>
        <div className="comet">
          <img src={CometImg3} alt="comet" />
        </div>
        <div className="comet">
          <img src={CometImg4} alt="comet" />
        </div>
        <div className="comet">
          <img src={CometImg5} alt="comet" />
        </div>
        <div className="comet">
          <img src={CometImg6} alt="comet" />
        </div>
        <div className="comet">
          <img src={CometImg7} alt="comet" />
        </div>
        <div className="comet">
          <img src={CometImg8} alt="comet" />
        </div>
        <div className="comet">
          <img src={CometImg9} alt="comet" />
        </div>
        <div className="comet">
          <img src={CometImg10} alt="comet" />
        </div>
      </div>
    </>
  );
};

export default Comet;

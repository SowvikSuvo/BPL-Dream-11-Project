import React from "react";
import navImg from "../assets/assets/logo.png";
import currencyImg from "../assets/assets/Currency.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-[1400px] mx-auto ">
      <div className="flex-1">
        <a className="text-xl">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center">
        <span className="mr-1 font-semibold">{availableBalance} </span>
        <span className="mr-1 font-semibold"> Coin</span>
        <img src={currencyImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;

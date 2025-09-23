import React from "react";
import bannerImg from "../../assets/assets/bg-shadow.png";
import cricketImg from "../../assets/assets/banner-main.png";

const Banner = () => {
  return (
    <div className="max-w-[1400px] mx-auto mb-20 mt-7">
      <div className="relative">
        <div>
          <img
            className="w-full bg-black  rounded-3xl"
            src={bannerImg}
            alt=""
          />
        </div>
        <div className="absolute top-15 right-70 space-y-5">
          <div className=" absolute left-70">
            <img src={cricketImg} alt="" />
          </div>
          <div className="text-white text-center space-y-6 mt-60">
            <h1 className="text-4xl font-bold ">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-2xl font-medium">
              Beyond Boundaries Beyond Limits
            </p>
            <button className="font-bold text-black bg-gradient-to-r from-[#d579ac] to-[#dbaa51] border-1 border-white py-4 px-5 rounded-2xl">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

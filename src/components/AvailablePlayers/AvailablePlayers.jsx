import React, { use } from "react";
import userImg from "../../assets/assets/Group1.png";
import flagImg from "../../assets/assets/Group2.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);
  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {playerData.map((player) => (
        <div className="card bg-base-100  shadow-sm p-4">
          <figure>
            <img
              className="rounded-xl w-full h-[300px]"
              src={player.playerImage}
              alt="Shoes"
            />
          </figure>
          <div className="mt-4">
            <div className="flex">
              <img src={userImg} alt="" />
              <h2 className="card-title font-semibold text-xl ml-2">
                {player.playerName}
              </h2>
            </div>

            <div className="flex justify-between items-center  mt-4 border-b-1 border-gray-300 pb-3">
              <div className="flex items-center ">
                <img
                  className="w-[20px] h-[20px] opacity-60 "
                  src={flagImg}
                  alt=""
                />
                <span className="ml-2">{player.playerCountry}</span>
              </div>
              <button className="btn">{player.playerRole}</button>
            </div>

            <div className="flex justify-between font-bold">
              <span className="font-bold">Rating</span>
              <span className="font-bold">{player.rating}</span>
            </div>

            <div className="flex justify-between ">
              <span className="font-bold text-[#131313cb]">
                {player.battingHand} <span>bat</span>
              </span>
              <span>
                {player.bowlingHand} <span>bowl</span>
              </span>
            </div>

            <div className="card-actions mt-3 flex justify-between items-center">
              <p className="font-bold">Price: {player.price}</p>
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;

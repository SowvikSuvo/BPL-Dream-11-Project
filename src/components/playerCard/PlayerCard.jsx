import React, { useState } from "react";
import userImg from "../../assets/assets/Group1.png";
import flagImg from "../../assets/assets/Group2.png";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  setPurchasedPlayers,
  purchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(
      playerData.price.split("$").join("").split(",").join("")
    );
    if (availableBalance < playerPrice) {
      alert("Not enough Coins!!!");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);
    setPurchasedPlayers([...purchasedPlayers, playerData]);
  };
  return (
    <div className="card bg-gradient-to-r from-[#fcac19] to-[#ff0000d7] shadow-sm p-4 ">
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

        <div className="card-actions mt-3 flex    justify-between items-center">
          <p className="font-bold">Price: {player.price}</p>
          <button
            disabled={isSelected}
            onClick={() => {
              handleSelected(player);
            }}
            className="btn"
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

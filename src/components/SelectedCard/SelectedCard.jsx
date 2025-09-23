import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  // console.log(player);
  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <div className="border-2 mt-2 border-gray-300 rounded-xl p-3 flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-[50px] h-[50px] rounded-xl"
          src={player.playerImage}
          alt=""
        />
        <div className="ml-3">
          <h1 className="font-bold">{player.playerName}</h1>
          <p className="text-xs">{player.playerRole}</p>
        </div>
      </div>
      <div onClick={handleRemove}>
        <img src="https://i.ibb.co.com/8DPw68K1/Frame.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;

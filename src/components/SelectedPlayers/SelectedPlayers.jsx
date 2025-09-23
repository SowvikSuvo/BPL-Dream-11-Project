import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers, removePlayer, setToggle }) => {
  return (
    <div className="max-w-[1400px] mx-auto">
      {purchasedPlayers.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}
      <div>
        <button
          onClick={() => setToggle(true)}
          className="bg-[#E7FE29]  border-1  p-4 rounded-2xl font-bold mt-10"
        >
          Add More Players
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;

import React, { use } from "react";

import PlayerCard from "../playerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  setPurchasedPlayers,
  purchasedPlayers,
}) => {
  const playerData = use(playersPromise);
  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 ">
      {playerData.map((player) => (
        <PlayerCard
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;

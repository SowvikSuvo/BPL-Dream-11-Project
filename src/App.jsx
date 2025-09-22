import { Suspense, useState } from "react";
import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Navbar from "./Navbar/Navbar";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const [Toggle, setToggle] = useState(true);
  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar></Navbar>
      <div className=" max-w-[1400px] mx-auto flex justify-between items-center mb-10">
        <h1 className="font-bold text-2xl">Available players</h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4 border-1 border-gray-300 rounded-l-2xl border-r-0 ${
              Toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 border-1 border-gray-300 rounded-r-2xl border-l-0 ${
              Toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {Toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl "></span>
          }
        >
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;

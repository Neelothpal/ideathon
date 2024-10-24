import Dashboard from "./Dashboard"
import Board from "./Board"
import Graph from "./Graph"
import { useState } from "react";

export default function App() {
  const [selectedStation, setSelectedStation] = useState("station1"); // Default selected station

  const handleStationChange = (station) => {
    setSelectedStation(station);
  };

  return (
    <div className="bg-gray-950 flex lg:flex-row flex-col">
      <Dashboard onStationChange={handleStationChange} />
      <div className="px-6 w-[100%] h-screen flex flex-col justify-start items-start">
        <Board selectedStation={selectedStation} />
        <Graph selectedStation={selectedStation} />
      </div>
    </div>
  )
}
import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plantData, setPlantData] = useState([])

  useEffect(()=> {
    (async () => {
      let req = await fetch(`http://localhost:6001/plants`)
      let res = await req.json()
      console.log("DATABASE RESPONSE", res)
      setPlantData(res)
    })()
  }, []) 

  return (
    <ul className="cards">
      {
        plantData.map((plant) => (
          <PlantCard plant={plant}/>
        ))}
    </ul>
  );
}

export default PlantList;

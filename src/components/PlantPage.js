import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
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
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantData={plantData}/>
    </main>
  );
}

export default PlantPage;

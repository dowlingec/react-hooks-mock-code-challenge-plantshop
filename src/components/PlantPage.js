import React, { useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  useEffect(()=> {
    (async () => {
      let req = await fetch(`http://localhost:6001/plants`)
      let res = await req.json()
      console.log("DATABASE RESPONSE", res)
    })()
  }, []) 

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;

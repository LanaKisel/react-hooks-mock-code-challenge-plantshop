import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchedItem}) {
  const newPlants = plants
  .filter(plant=>{
    if(searchedItem==="") {
      return true
    }
    return plant.name.toLowerCase().includes(searchedItem.toLowerCase())
    })
  .map(plant=> <PlantCard key={plant.id} plant={plant} />)
  return (
    <ul className="cards">{newPlants}</ul>
  );
}

export default PlantList;

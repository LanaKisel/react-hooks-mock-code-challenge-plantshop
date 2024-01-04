import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [searchedItem, setSearchedItem]= useState("")


  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(data=>setPlants(data))
  }, [])

  function handleAddPlants(newItem){
    setPlants([...plants, newItem])
  }

  function handleSearch(searchedItem){
    setSearchedItem(searchedItem)
  }

  return (
    <main>
      <NewPlantForm onAddPlants={handleAddPlants}/>
      <Search onSearch={handleSearch} searchedItem={searchedItem}/>
      <PlantList plants={plants} searchedItem={searchedItem}  />
    </main>
  );
}

export default PlantPage;

import React, {useState} from "react";

function PlantCard({plant}) {

  const [inStock, setInStock] = useState(true)

  function handleInStock(){
    if (inStock) {
      setInStock(!inStock)
    } else if (inStock=== false) {
      setInStock (true)
    }
  }


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleInStock}>In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

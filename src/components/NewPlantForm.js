import React, { useState } from "react";

function NewPlantForm({ onAddPlants }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })

  function handleChange(event) {
    setFormData({
      ...formData, [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(r => {r.json()})
      .then(newItem => {
        onAddPlants(newItem)
        setFormData({
          name: "",
          image: "",
          price: 0
        })
      })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" value={formData.image} placeholder="Image URL" onChange={handleChange} />
        <input type="number" name="price" value={formData.price} step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}
export default NewPlantForm;

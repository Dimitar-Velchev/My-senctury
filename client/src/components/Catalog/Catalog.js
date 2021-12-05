import { useState, useEffect } from "react";

import PetCard from "./PetCard";
import "./Catalog.css";

const URL = "http://localhost:5000/data/catalog";

function Catalog() {
  const [pets, setPets] = useState([]);


  useEffect(async () => {
    const data = await fetch(URL);
    const result = await data.json()
    setPets(result)
  },[]);


  return (
    <div id="catalog-body">
      <ul className="pet-list">
        {pets.map(pet=><PetCard key={pet._id} pet={pet}/>)}
      </ul>
    </div>
  );
}

export default Catalog;

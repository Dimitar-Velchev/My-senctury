import PetCard from "./PetCard";
import "./Catalog.css";

import { useState, useEffect } from "react";

function Catalog() {
  const url = "http://localhost:5000/data/catalog";

  const [pets, setPets] = useState([]);

  useEffect(async () => {
    const data = await fetch(url);
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

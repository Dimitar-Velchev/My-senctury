import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

import PetCard from "./PetCard";
import { getAll } from "../../services/petService";
import "./Catalog.css";

function Catalog() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAll().then((result) => {
      setPets(result);
      setLoading(false);
    });
  }, []);

  return (
    <div id="catalog-body">
      <ul className="pet-list">
        {loading ? (
          <Spinner animation="border" />
        ) : pets.length > 0 ? (
          pets.map((pet) => <PetCard key={pet._id} pet={pet} />)
        ) : (
          <h2>No pets in catalog yet.</h2>
        )}
      </ul>
    </div>
  );
}

export default Catalog;

import { NavLink } from "react-router-dom";

function PetCategory({ pet }) {
  return (
    <li>
      <img src={pet.src} width="114" height="160" alt="" />

      <h2>{pet.title}</h2>
      <p>
        {pet.text}
        <NavLink className="more" to={`/catalog/${pet.category}`}>
          View all 
        </NavLink>
      </p>
    </li>
  );
}
export default PetCategory;

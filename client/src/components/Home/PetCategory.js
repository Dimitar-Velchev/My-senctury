import { NavLink } from "react-router-dom";

function PetCategory({ pet }) {
  return (
    <li>
      <a href="#">
        <img src={pet.src} width="114" height="160" alt="" />
      </a>
      <h2>{pet.title}</h2>
      <p>
        {pet.text}
        <NavLink className="more" to="/catalog">
          View all
        </NavLink>
      </p>
    </li>
  );
}
export default PetCategory;

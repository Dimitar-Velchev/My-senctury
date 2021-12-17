import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const {user} = useContext(AuthContext);

  const userNav = (
    <>
      <li>
        <NavLink to="/create">Add Pet</NavLink>
      </li>
      <li>
        <NavLink to={`/mypets/${user._id}`}>{user.username}'s Pets</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </>
  );

  const guestNav = (
    <>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return (
    <div id="header">
      <NavLink to="/" id="logo">
        <img src="images/new-logo.png" width="310" height="120" alt="" />
      </NavLink>
      <ul className="navigation">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
        {user.username ? userNav : guestNav}
      </ul>
    </div>
  );
}

export default Header;

import {NavLink} from 'react-router-dom'
function Header (){
return (
<div id="header"> <NavLink to="/" id="logo"><img src="images/new-logo.png" width="310" height="120" alt=""/></NavLink>
    <ul className="navigation">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/catalog">Catalog</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li>
      {/* <li><NavLink to="/create">Add-Pet</NavLink></li> */}
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/mypets">MyPets</NavLink></li>
      <li><NavLink to="/logout">Logout</NavLink></li>
    </ul>
</div>
);
}

export default Header


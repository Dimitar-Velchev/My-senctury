import "./MyPets.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getUser } from "../../services/userService";

function MyPets({match}) {
    const [user, setUser] = useState({});
  
    useEffect(() => {
        getUser(match.params.userId).then((result) => {
          setUser(result);
        });
      }, [match.params.userId]);


  return (
    <section className="about">
      <div className="main">
        <img
          src={"/images/profPic.png"}
          alt="profile pic"
          title="Click to upload a profile pic"
        />
        <div className="about-text">
          <h1>About</h1>
          <h5>
            Username: <span> {user.username} </span>
          </h5>
          <h5>
            E-mail: <span> {user.email} </span>
          </h5>
          <h5>
            Number of listings:<span> {user.offered?.length} </span>
          </h5>
          <h5>
            View listings: {user.offered?.map(pet => <NavLink to={`/catalog/details/${pet._id}`}>{pet.name} </NavLink> )}
          </h5>
        </div>
      </div>
    </section>
  );
}

export default MyPets;

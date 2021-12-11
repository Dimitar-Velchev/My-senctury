import "./MyPets.css";
import { NavLink } from "react-router-dom";

function MyPets() {
  return (
    <section className="about">
      <div className="main">
        <img
          src="./images/profilePic.jpg"
          alt="profile pic"
          title="Click to upload a profile pic"
        />
        <div className="about-text">
          <h1>About</h1>
          <h5>
            Username: <span> Mitko </span>
          </h5>
          <h5>
            E-mail: <span> dimityr_velchev@abv.bg </span>
          </h5>
          <h5>
            Number of listings:<span> 2 </span>
          </h5>
          <h5>
            View listings: <span>Masha, Molly </span>
          </h5>
        </div>
      </div>
    </section>
  );
}

export default MyPets;

import { useState } from "react";
import { NavLink } from "react-router-dom";

import PetCategory from "./PetCategory";


function Home() {
  let [pets] = useState([
    {
      id: 0,
      category: 'dogs',
      src: "images/puppy.jpg",
      title: "Meet Our Friendly Dogs",
      text: "Meet our rescue dogs and puppies looking for a forever home. Find your perfect pet with us and adopt today.",
    },
    {
      id: 1,
      category: 'cats',
      src: "images/cat.jpg",
      title: "Fall in Love with Our Cats and Kittens",
      text: "If a cat is the new friend you have been looking for, look no further. From babies to elderlies our cat are all waiting for their new home. ",
    },
  ]);

  return (
    <div id="body">
      <div className="banner">
        &nbsp;{" "}
        <span>
          Thank you for your interest in adopting a pet with My Sanctuary! My Sanctuary places thousands of animals in new, loving homes every year, and
          the pets you see here are waiting for their own happy endings.
         <br /> 
         Please <NavLink to="/register">register here</NavLink> if you are interested in one of our animals.
        </span>
      </div>
      <div id="content">
        <div className="content">
          <ul>
            {pets.map((pet) => (
              <PetCategory key={pet.id} pet={pet} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

import PetCategory from "./PetCategory";
import { useState } from "react";

function Home() {
  let [pets, setPet] = useState([
    {
      id: 0,
      src: "images/puppy.jpg",
      title: "Meet Our Friendly Dogs",
      text: "Meet our rescue dogs and puppies looking for a forever home. Find your perfect pet with us and adopt today.",
    },
    {
      id: 1,
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

        <div id="sidebar">
          <div className="section">
            <ul className="navigation">
              <li className="active">
                <a href="#">Shopping Guides</a>
              </li>
              <li>
                <a href="#">Discounted Items</a>
              </li>
            </ul>
            <div className="aside">
              <div>
                <div>
                  <ul>
                    <li>
                      <a href="#">Pet Accesories </a>{" "}
                      <a className="more" href="#">
                        see all
                      </a>
                    </li>
                    <li>
                      <a href="#">Bath Essentials</a>{" "}
                      <a className="more" href="#">
                        see all
                      </a>
                    </li>
                    <li>
                      <a href="#">Pet Food</a>{" "}
                      <a className="more" href="#">
                        see all
                      </a>
                    </li>
                    <li>
                      <a href="#">Pet Vitamins</a>{" "}
                      <a className="more" href="#">
                        see all
                      </a>
                    </li>
                    <li>
                      <a href="#">Pet Needs</a>{" "}
                      <a className="more" href="#">
                        see all
                      </a>
                    </li>
                    <li>
                      <a href="#">Pet Toy and Treats</a>{" "}
                      <a className="more" href="#">
                        see all
                      </a>
                    </li>
                    <li>
                      <a href="#">Pet Supplies</a>{" "}
                      <a className="more" href="#">
                        see all
                      </a>
                    </li>
                    <li>
                      <a href="#">Pet Emergency Kit</a>{" "}
                      <a className="more" href="#">
                        see all
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

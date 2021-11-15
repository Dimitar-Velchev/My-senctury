import PetCategory from "./PetCategory";
import { useState } from "react";

function Home() {
  let [pets, setPet] = useState([
    {
      src: "images/pexelsphoto20233841.jpeg",
      title: "Dog",
      text: "Mirum est notare quam littera gothica, quam nunc putamus parum clara",
    },
    {
      src: "images/cat.jpg",
      title: "Cat",
      text: "Mirum est notare quam littera gothica, quam nunc putamus parum clara",
    },
  ]);

  return (
    <div id="body">
      <div className="banner">&nbsp;</div>
      <div id="content">
        <div className="content">
          <ul>
            {pets.map((pet) => (
              <PetCategory pet={pet} />
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

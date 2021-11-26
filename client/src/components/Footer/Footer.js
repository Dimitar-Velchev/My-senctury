function Footer() {
  return (
    <div id="footer">
      <div className="featured">
        <ul>
          <li>
            <a href="#">
              <img
                src="images/organic-and-chemical-free.jpg"
                width="300"
                height="90"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/good-food.jpg" width="300" height="90" alt="" />
            </a>
          </li>
          <li className="last">
            <a href="#">
              <img
                src="images/pet-grooming.jpg"
                width="300"
                height="90"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
      <div id="footnote">
        <div className="section">
          Copyright &copy; 2021 <a href="#">My Sanctuary</a> All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;

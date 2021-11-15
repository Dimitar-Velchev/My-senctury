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
          Copyright &copy; 2012 <a href="#">Company Name</a> All rights reserved
          | Website Template By{" "}
          <a target="_blank" href="http://www.freewebsitetemplates.com/">
            freewebsitetemplates.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

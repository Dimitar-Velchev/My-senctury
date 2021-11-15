function Home () {
    return (
<div id="body">
  <div className="banner">&nbsp;</div>
  <div id="content">
    <div className="content">
      <ul>
        <li> <a href="#"><img src="images/puppy.jpg" width="114" height="160" alt=""/></a>
          <h2>What they need</h2>
          <p>Mirum est notare quam littera gothica, quam nunc putamus parum clara m, ant epo suerit li tterar. <a className="more" href="#">View all</a></p>
        </li>
        <li> <a href="#"><img src="images/cat.jpg" width="114" height="160" alt=""/></a>
          <h2>Something good</h2>
          <p>Gothica, quam nun c putamus parum claram, anteposuerit litterarum formas humani tatis per seacula. <a className="more" href="#">View all</a></p>
        </li>
        <li> <a href="#"><img src="images/koi.jpg" width="114" height="160" alt=""/></a>
          <h2>Kinds of Fish</h2>
          <p>Quam nunc putamus parum claram, antep osuerit litter arum formas humanitatis per seacula quarta. <a className="more" href="#">View all</a></p>
        </li>
        <li> <a href="#"><img src="images/bird.jpg" width="114" height="160" alt=""/></a>
          <h2>Fun birds</h2>
          <p>Mirum est notare quam littera gothica , quam nunc putamus parum claram, anteposuerit. <a className="more" href="#">View all</a></p>
        </li>
      </ul>
    </div>
    <div id="sidebar">
      <div className="search">
        <input type="text" name="s" value="Find"/>
        <button>&nbsp;</button>
        <label for="articles">
          <input type="radio" id="articles"/>
          Articles</label>
        <label for="products">
          <input type="radio" id="products" checked/>
          PetMart Products</label>
      </div>
      <div className="section">
        <ul className="navigation">
          <li className="active"><a href="#">Shopping Guides</a></li>
          <li><a href="#">Discounted Items</a></li>
        </ul>
        <div className="aside">
          <div>
            <div>
              <ul>
                <li><a href="#">Pet Accesories </a> <a className="more" href="#">see all</a></li>
                <li><a href="#">Bath Essentials</a> <a className="more" href="#">see all</a></li>
                <li><a href="#">Pet Food</a> <a className="more" href="#">see all</a></li>
                <li><a href="#">Pet Vitamins</a> <a className="more" href="#">see all</a></li>
                <li><a href="#">Pet Needs</a> <a className="more" href="#">see all</a></li>
                <li><a href="#">Pet Toy and Treats</a> <a className="more" href="#">see all</a></li>
                <li><a href="#">Pet Supplies</a> <a className="more" href="#">see all</a></li>
                <li><a href="#">Pet Emergency Kit</a> <a className="more" href="#">see all</a></li>
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

export default Home
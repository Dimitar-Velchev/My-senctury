import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import MyPets from "./components/MyPets/MyPets";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

import { Route,Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog"   component={Catalog} />
        <Route path="/login"   component={Login} />
        <Route path="/register"   component={Register} />
        <Route path="/mypets"   component={MyPets} />
        <Route path="/create"   component={Create} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

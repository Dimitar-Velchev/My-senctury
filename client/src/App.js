import { Route,Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import MyPets from "./components/MyPets/MyPets";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import PetDetails from "./components/Details/PetDetails";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" exact  component={Catalog} />
        <Route path="/catalog/details/:petId"   component={PetDetails} />
        <Route path="/login"   component={Login} />
        <Route path="/register"   component={Register} />
        <Route path="/mypets"   component={MyPets} />
        <Route path="/create"   component={Create} />
        <Route path="*" component={NotFound} />         
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

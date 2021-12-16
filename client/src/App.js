import { Route, Switch, } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import MyPets from "./components/MyPets/MyPets";
import Login from "./components/User/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/User/Register";
import PetDetails from "./components/Details/PetDetails";
import ThankYou from "./components/ThankYou/ThankYou";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [user, setUser] = useState({
    _id: "",
    email: "",
    username: "",
    accessToken: "",
  });

  const loginUser = (authData) => {
    setUser(authData);
  };
  const logoutUser = () => {
    setUser("");
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/catalog/details/:petId" exact component={PetDetails} />
          <Route path="/catalog/details/:petId/thanks" component={ThankYou} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/mypets/:userId" component={MyPets} />
          <Route path="/create" component={Create} />
          <Route path="/edit/:petId" component={Edit} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;

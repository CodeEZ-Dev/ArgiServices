import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/components/screens/Home";
import Preorder from "./components/screens/Preorder";
import BigFarmer from "../src/components/screens/BigFarmer";
import SmallFarmer from "../src/components/screens/SmallFarmer";
import ContactUS from "../src/components/screens/ContactUS";
import NotFound from "../src/components/screens/404error";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/BigFarmer">
          <BigFarmer />
        </Route>
        <Route path="/SmallFarmer">
          <SmallFarmer />
        </Route>
        <Route path="/Preorder">
          <Preorder />
        </Route>
        <Route path="/ContactUS">
          <ContactUS />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

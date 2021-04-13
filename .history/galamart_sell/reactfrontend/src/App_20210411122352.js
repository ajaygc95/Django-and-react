import React from "react";
import HeroPage from "./components/Hero/HeroPage";
// import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from "./components/About";
import Shop from "./components/Shop";
// import ItemDetail from "./components/ItemDetail";
// import Navbar from "./components/NavBar";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact component={HeroPage}></Route>
        <Route path="/services" exact component={Shop} />
        {/* <Route path="/about" component={About} />

          <Route path="/shop/:id" component={ItemDetail} /> */}
      </Switch>
    </Router>
  );
}

export default App;

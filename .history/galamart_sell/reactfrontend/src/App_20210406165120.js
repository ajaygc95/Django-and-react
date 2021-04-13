import React from "react";
import HeroPage from "./components/HeroPage";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Shop from "./components/Shop";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={HeroPage}></Route>
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

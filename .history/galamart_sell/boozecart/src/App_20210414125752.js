import { Footer, Navbar, Services } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import { ServicesContainer } from "./components/Services/Services.elements";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/services" component={ServicesContainer}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

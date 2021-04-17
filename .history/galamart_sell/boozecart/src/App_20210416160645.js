import { Footer, Navbar, Services } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import HeroService from "./pages/Services/HeroService";
import LoginPage from "./pages/LoginPage/LoginPage";
import Signin from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/services" component={HeroService}></Route>
        <Route path="/sign-up" component={LoginPage}></Route>
        <Route path="/sign-in" component={SignInPage}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

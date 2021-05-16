import { Footer, Navbar, Services, SignIn } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import HeroService from "./pages/Services/HeroService";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignInPage from "./pages/LoginPage/SignInPage";
import HomeFeedPage from "./pages/HomeFeed/HomeFeedPage";
import UserAuthPage from "./pages/UserAuth/UserAuthPage";
import DetailStorePage from "./pages/DetailStorePage/DetailStorePage";

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
        <Route path="/home-feed" component={HomeFeedPage}></Route>
        <Route path={"/detail-store/:id"} component={DetailStorePage}></Route>

        <Route path="/user-auth" component={UserAuthPage}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import SingleRoomPage from "./pages/SingleRoom";
import RoomsPage from "./pages/Rooms";
import NavbarPage from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <NavbarPage />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms" component={RoomsPage} />
        <Route exact path="/rooms/:slug" component={SingleRoomPage} />
        <Route exact path="*" component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;

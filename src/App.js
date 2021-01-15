import React from "react";
import "./App.css";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import SingleRoomPage from "./pages/SingleRoom";
function App() {
  return (
    <>
      <HomePage />
      <SingleRoomPage />
      <ErrorPage />
    </>
  );
}

export default App;

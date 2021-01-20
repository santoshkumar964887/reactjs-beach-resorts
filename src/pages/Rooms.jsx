import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import HeaderBackground from "../components/HeaderBackground";
import RoomsContainer from "../components/RoomsContainer";
const Rooms = () => {
  return (
    <>
      <HeaderBackground header="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </HeaderBackground>
      <RoomsContainer />
    </>
  );
};
export default Rooms;

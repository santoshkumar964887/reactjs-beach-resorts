import React from "react";
import HeaderBackground from "../components/HeaderBackground";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <HeaderBackground>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms Starting At INR:5000"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </HeaderBackground>
      <Services />
    </>
  );
};
export default Home;

import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import HeaderBackground from "../components/HeaderBackground";
const Error = () => {
  return (
    <HeaderBackground>
      <Banner title="404" subtitle="Page Not Found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </HeaderBackground>
  );
};

export default Error;

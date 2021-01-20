import React, { Component } from "react";
import HeaderBackground from "../components/HeaderBackground";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-10.jpeg";
import { RoomContext } from "../context/RoomContext";
import StyledHero from "../components/StyledHero.js";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      breakfast,
      capacity,
      extras,
      images,
      pets,
      price,
      size,
      type,
    } = room;
    const [firstImage, ...restImage] = images;
    return (
      <>
        <StyledHero img={firstImage || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {restImage.map((image, index) => (
              <img key={index} src={image} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : INR{price * 7}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast ? "Free Breakfast" : null}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>-{item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

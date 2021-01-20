import React, { Component } from "react";
import HeaderBackground from "../components/HeaderBackground";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-10.jpeg";
import { RoomContext } from "../context/RoomContext";
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
    return <div>Hello from single room</div>;
  }
}

import React, { Component } from "react";
import { RoomContext } from "../context/RoomContext";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
export class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms1 } = this.context;
    const rooms = rooms1.map((room) => <Room key={room.id} room={room} />);
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

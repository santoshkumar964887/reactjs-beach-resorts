import React, { Component } from "react";
import { RoomContext } from "../context/RoomContext";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
export class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms: rooms1 } = this.context;
    console.log(rooms1);
    return (
      <div>
        <Room />
        from feature
        <Loading />
      </div>
    );
  }
}

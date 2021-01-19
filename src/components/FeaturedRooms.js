import React, { Component } from "react";
import { RoomContext } from "../context/RoomContext";
export class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const value = this.context;
    return <div>{value} from feature</div>;
  }
}

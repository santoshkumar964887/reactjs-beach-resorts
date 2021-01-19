import React, { Component } from "react";
import { RoomContext } from "../context/RoomContext";
import Loading from "./Loading";
export class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const value = this.context;
    return (
      <div>
        {value} from feature
        <Loading />
      </div>
    );
  }
}

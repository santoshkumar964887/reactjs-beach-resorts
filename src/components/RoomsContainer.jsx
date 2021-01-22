import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomList";
import Loading from "./Loading";
import { withRoomConsumer } from "../context/RoomContext";
function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}
export default withRoomConsumer(RoomsContainer);

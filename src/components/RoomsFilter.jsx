import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import Title from "./Title";
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomsFilter({ rooms }) {
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    handleChange,
  } = useContext(RoomContext);
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => <option key={index}>{item}</option>);
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  );
}

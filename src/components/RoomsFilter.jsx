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
  let pepole = getUnique(rooms, "capacity");
  pepole = pepole.map((item, index) => <option key={index}>{item}</option>);
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
        {/* Guest section */}
        <div className="form-group">
          <label htmlFor="capacity">Guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {pepole}
          </select>
        </div>
        {/* range section */}
        <div className="form-group">
          <label htmlFor="price">room price INR: {price * 7}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            className="form-control"
            id="price"
          />
        </div>
        {/* size section */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <input
            type="number"
            name="minSize"
            value={minSize}
            onChange={handleChange}
            className="size-input"
            id="size"
          />
          <input
            type="number"
            name="maxSize"
            value={maxSize}
            onChange={handleChange}
            className="size-input"
            id="size"
          />
        </div>
        {/* extra section */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              checked={breakfast}
              onChange={handleChange}
              className="size-input"
              id="breakfast"
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
              className="size-input"
              id="pets"
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}

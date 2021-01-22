import React, { Component } from "react";
import items from "../data";
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  //getData
  componentDidMount() {
    let rooms = this.FormateData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }
  FormateData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];

    let room = tempRooms.find((room) => room.slug === slug);

    return room;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState({ [name]: value }, this.filterRooms);
  };
  filterRooms = () => {
    let {
      rooms,
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
    } = this.state;
    let tempRooms = [...rooms];
    capacity = parseInt(capacity);
    price = parseInt(price);
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((item) => item.capacity >= capacity);
    }
    console.log(price);
    tempRooms = tempRooms.filter((item) => item.price <= price);
    this.setState({ sortedRooms: tempRooms });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
export { RoomProvider, RoomConsumer, RoomContext };

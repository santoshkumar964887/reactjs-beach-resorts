import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "No reservation costs. Great rates. Book at over 1,400,000 hotels online. Get Instant Confirmation. 24/7 Customer Service.",
      },
      {
        icon: <FaHiking />,
        title: "free Hiking",
        info:
          "No reservation costs. Great rates. Book at over 1,400,000 hotels online. Get Instant Confirmation. 24/7 Customer Service.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info:
          "No reservation costs. Great rates. Book at over 1,400,000 hotels online. Get Instant Confirmation. 24/7 Customer Service.",
      },
      {
        icon: <FaBeer />,
        title: "free Beers",
        info:
          "No reservation costs. Great rates. Book at over 1,400,000 hotels online. Get Instant Confirmation. 24/7 Customer Service.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

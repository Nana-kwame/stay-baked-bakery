import React, { Component } from "react";
import "./Home.scss";

//** Categories */
import all from "./../../assets/candy-cane.png";
import cupcake from "./../../assets/cupcake.svg";
import cookie from "./../../assets/cookie.svg";
import juice from "./../../assets/hot-coffee.svg";
import candy from "./../../assets/popsicle.svg";

//** Content */
import rainbowcookie from "./../../assets/rainbow.jpg";
import jamba from "./../../assets/jambajuice.jpg";
import melonpopsie from "./../../assets/melonpop.jpg";
import velvetcookie from "./../../assets/velvetcookie.jpg";
import bluecake from "./../../assets/bluecupcake.jpg";
import gummies from "./../../assets/gummies.jpg";
import browncake from "./../../assets/browncupcake.jpg";
import oreosquare from "./../../assets/oreosquare.jpg";
import cakepops from "./../../assets/cakepops.jpg";
import treats_ from "./../../assets/treats.jpg";
import worms from "./../../assets/worms.jpg";

import { Card, Button } from "../../components";

const categories = [
  {
    name: "All",
    icon: all,
    class: "small",
  },
  {
    name: "Cupcakes",
    icon: cupcake,
  },
  {
    name: "Cookies",
    icon: cookie,
  },
  {
    name: "Juices",
    icon: juice,
  },
  {
    name: "Treats",
    icon: candy,
  },
];

const db = [
  {
    name: "Rainbow Cookies",
    type: "cookies",
    image: rainbowcookie,
  },
  {
    name: "Jamba Juice",
    type: "juices",
    image: jamba,
  },
  {
    name: "Melon Popsicle",
    type: "treats",
    image: melonpopsie,
  },
  {
    name: "Velvet Cookie",
    type: "cookies",
    image: velvetcookie,
  },
  {
    name: "Sky Cupcake ",
    type: "cupcakes",
    image: bluecake,
  },
  {
    name: "Assorted Gummie Bears",
    type: "treats",
    image: gummies,
  },
  {
    name: "Fudgey Brownie",
    type: "cupcakes",
    image: browncake,
  },
  {
    name: "Oreo Squares",
    type: "cookies",
    image: oreosquare,
  },
  {
    name: "Cake Pops",
    type: "treats",
    image: cakepops,
  },
  {
    name: "Assorted Treats",
    type: "treats",
    image: treats_,
  },
  {
    name: "Gummie Worms",
    type: "treats",
    image: worms,
  },
];

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__header">
          <h3 className="home__header--title">Our Treats</h3>

          <div className="home__header--content">
            {categories.map((item, i) => (
              <Card key={`category-${i}`}>
                <div className="home__header--content__card">
                  <img
                    src={item.icon}
                    className={
                      item.class
                        ? item.class
                        : "home__header--content__card--img"
                    }
                  />

                  <p className="home__header--content__card--title">
                    {item.name}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="home__content">
          {db.map((item, i) => (
            <Card
              key={`categories-${i}`}
              style={{
                padding: 0,
                height: "321px",
                width: "325px",
              }}
            >
              <div className="home__content--card">
                <div
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  className="home__content--card__img"
                />

                <div className="home__content--card__content">
                  <p className="home__content--card__content--title">
                    {item.name}
                  </p>

                  <button className="home__content--card__content--btn">
                    Order
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;

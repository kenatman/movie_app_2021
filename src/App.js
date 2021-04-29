import React from "react";
import PropTypes from "prop-types";

function Food({ menu, picture, rating }) {
  return (
    <div>
      <h4>I like {menu}</h4>
      <h3>{rating}</h3>
      <img src={picture} alt={menu} />
    </div>
  );
}

Food.propTypes = {
  menu: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

const foodArray = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://images.unsplash.com/photo-1583224944844-5b268c057b72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtpbWNoaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Bibimbab",
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmliaW1iYXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    rating: 3.8,
  },
  {
    id: 3,
    name: "pizza",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    rating: 5,
  },
  {
    id: 4,
    name: "pasta",
    image:
      "https://images.unsplash.com/photo-1590477413464-ce102b59852c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBhc3RhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    rating: 2.4,
  },
];

function App() {
  return (
    <div>
      {foodArray.map((food) => (
        <Food
          key={food.id}
          menu={food.name}
          picture={food.image}
          rating={food.rating}
        />
      ))}
    </div>
  );
}

export default App;

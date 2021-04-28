import React from "react";

function Food({ fav }) {
  return <h4>I like {fav}</h4>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="kimchi" />
      <Food fav="samkyupsal" />
      <Food fav="chukumi" />
      <Food fav="chicken" />
    </div>
  );
}

export default App;

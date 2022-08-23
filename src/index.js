import React from "react";
import ReactDOM from "react-dom";
const name = "Mehnaaz";
const n = 9;
const lastname = "shaik";

ReactDOM.render(
  <div>
    <h2>How people call me {name}</h2>
    <ul>
      <li> my fav food is</li>
      <li> mehnaaz</li>
      <li> tabasum</li>
      <li> shaik</li>
      <li>itsokays</li>
    </ul>
    <h1> my lucky number is {Math.floor(Math.random() * 10)}</h1>
    <h1>
      1. last name{lastname} {name}
    </h1>
    <h1>2. last name{lastname + " " + name}</h1>
    <h2> 3. by using EJS String literails {`${name} ${lastname}`}</h2>
  </div>,
  document.getElementById("root")
);

//render will take only one html element

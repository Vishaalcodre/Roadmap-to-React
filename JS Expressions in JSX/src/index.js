import React from "react";
import ReactDom from "react-dom";

const name = "Vishal";
const d = new Date();
const year = d.getFullYear();
ReactDom.render(
  <div>
    <p>Created by {name}</p>
    <p>©️ {year}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

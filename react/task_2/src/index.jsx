import ReactDOM from "react-dom";
import React from "react";
import "./index.scss";
import UsersList from "./UsersList.jsx";

// input props (obj)
// output jsx (кусок html, jsx)

const users = [
  {
    id: "id-0",
    age: 21,
    name: "Bob",
  },
  {
    id: "id-1",
    age: 17,
    name: "Tom",
  },
  {
    id: "id-2",
    age: 18,
    name: "Tad",
  },
  {
    id: "id-3",
    age: 45,
    name: "Sam",
  },
  {
    id: "id-4",
    age: 21,
    name: "Bob",
  },
  {
    id: "id-5",
    age: 17,
    name: "Tom",
  },
  {
    id: "id-6",
    age: 18,
    name: "Tad",
  },
  {
    id: "id-7",
    age: 45,
    name: "Sam",
  },
];

const rootElem = document.querySelector("#root");

ReactDOM.render(<UsersList users={users} />, rootElem);

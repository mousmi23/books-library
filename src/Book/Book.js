import React from "react";
import "./Book.css";

function Book({ authors, title, genre, id, shortDescription }) {
  return (
    <div className="card">
      <h4 className="card_title">{title}</h4>
      <div className="card_description">
        <p>Author: {authors}</p>
        <p>Title: {title}</p>
      </div>
      <p className="card_summary"> {shortDescription} </p>
      <div className="card_buttons">
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Book;

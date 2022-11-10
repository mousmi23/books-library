import React from "react";
import "./List.css";
import Book from "../Book/Book";

function List({ books }) {
  return (
    <div className="List">
      {books?.map((book, index) => {
        const { authors, title, shortDescription, id, summary } = book;
        return (
          <Book
            key={id}
            id={id}
            title={title}
            author={authors}
            descrip={shortDescription}
            summary={summary}
          />
        );
      })}
    </div>
  );
}

export default List;

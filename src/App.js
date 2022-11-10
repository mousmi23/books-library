import React, { useEffect, useState } from "react";
import Nav from "./Nav/Nav";
import List from "./List/List";
import axios from "axios";
import AddBooks from "./AddBooks/AddBooks";

function App() {
  let isLoading = true;
  const [books, setBooks] = useState([]);

  // const getBooks = async () => {
  //   // const url = "http://localhost:3000/books";
  //   const url = "https://manumitsacademy.github.io/books.json";

  //   await axios.get(url).then((result) => setBooks(result.data));
  // };

  const url = "https://manumitsacademy.github.io/books.json";
  const getBooks = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      // isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks(url);
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>....Loading</h1>
      </>
    );
  }
  return (
    <div>
      <Nav />

      <div className="app_body">
        <List books={books} />
        <AddBooks />
      </div>
    </div>
  );
}

export default App;

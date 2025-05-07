// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Books from "./components/books/Books";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleSearch = ({ searchText, searchOption }) => {
    const params = new URLSearchParams();

    if (searchOption === "Title") params.append("title", searchText);
    if (searchOption === "Author") params.append("author", searchText);
    if (searchOption === "Genre") params.append("genre", searchText);

    const url = `http://localhost:3000/books?${params.toString()}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error searching books:", err));
  };

  return (
    <div className="template">
      <Header onSearch={handleSearch} />
      <div className="content">
        <Books books={books} />
      </div>
    </div>
  );
}

export default App;

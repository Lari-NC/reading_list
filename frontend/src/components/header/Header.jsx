import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <h1 className="title">Reading List</h1>
      <h2 className="subtitle">Explore Books</h2>

      <label className="search">
        Search:
        <input
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Header;

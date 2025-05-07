import { Link } from "react-router";
import SearchBar from "../search/SearchBar";
import "./Header.css";

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <h1 className="title">Reading List</h1>
      </Link>
      <div className="search">
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;


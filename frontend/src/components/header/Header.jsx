import SearchBar from "../search/SearchBar";
import "./Header.css";

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <h1 className="title">Reading List</h1>
      <div className="search">
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;


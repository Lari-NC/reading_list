import SearchBar from "../search/SearchBar";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="title">Reading List</h1>
        <div className="search">
          <SearchBar
            className="search"
            onSearch={({ searchText, searchOption }) => {
              if (searchText && searchOption) {
                const params = new URLSearchParams();

                if (searchOption === "title")
                  params.append("title", searchText);
                if (searchOption === "author")
                  params.append("author", searchText);
                if (searchOption === "genre")
                  params.append("genre", searchText);

                const query = params.toString();
                const url = `http://localhost:3000/book?${query}`;

                fetch(url)
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                  });
              }
            }}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;

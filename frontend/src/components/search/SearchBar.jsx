import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [searchOption, setSearchOption] = useState("Title");

  const handleSearch = () => {
    onSearch({ searchText, searchOption });
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleOptionChange = (option) => {
    setSearchOption(option);
    setSearchText(""); 
  };

  const placeholderText =
    searchOption === "Author"
      ? "Search by Author"
      : searchOption === "Genre"
        ? "Search by Genre"
        : "Search";

  return (
    <div className="container">
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder={placeholderText}
          type="search"
          className="input"
          value={searchText}
          onChange={handleInputChange}
        />
      </div>
      <div className="radio-inputs">
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="Title"
            checked={searchOption === "Title"}
            onChange={(e) => handleOptionChange(e.target.value)}
          />
          <span className="name">Title</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="Author"
            checked={searchOption === "Author"}
            onChange={(e) => handleOptionChange(e.target.value)}
          />
          <span className="name">Author</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="Genre"
            checked={searchOption === "Genre"}
            onChange={(e) => handleOptionChange(e.target.value)}
          />
          <span className="name">Genre</span>
        </label>
      </div>
      <button onClick={handleSearch}>
        Search
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      </button>
    </div>
  );
};

export default SearchBar;


























































// import "./SearchBar.css";
// import { useState, useEffect } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [searchText, setSearchText] = useState("");
//   const [searchOption, setSearchOption] = useState("Title");
//   // const [genres, setGenres] = useState(["Fantasy", "Science Fiction", "Mystery", "Romance"]);
//   const [genres, setGenres] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:3000/books/genres")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Genres fetched:", data); // Verifica los datos aquí
//         setGenres(data);
//       });
//   }, []);

//   const handleSearch = () => {
//     if (searchOption === "Genre" && selectedGenre) {
//       onSearch({ searchText: selectedGenre, searchOption });
//     } else {
//       onSearch({ searchText, searchOption });
//     }
//   };

//   const handleGenreClick = (genre) => {
//     setSearchText(genre);
//     setSelectedGenre(genre);
//     setShowDropdown(false);
//   };


//   const handleInputFocus = () => {
//     if (
//       searchOption === "Title" ||
//       searchOption === "Author" ||
//       searchOption === "Genre"
//     ) {
//       setShowDropdown(true);
//     }
//   };

//   const handleInputChange = (e) => {
//     setSearchText(e.target.value);
//     if (searchOption === "Genre") {
//       setShowDropdown(true);
//     }
//   };

//   const handleOptionChange = (option) => {
//     setSearchOption(option);
//     setSearchText("");
//     setSelectedGenre("");
//     setShowDropdown(option === "Genre");
//   };

//   const filteredGenres =
//     searchOption === "Genre" && searchText
//       ? genres.filter((g) =>
//         g.toLowerCase().includes(searchText.toLowerCase())
//       )
//       : genres;


//   const placeholderText =
//     searchOption === "Author"
//       ? "Search by Author"
//       : searchOption === "Genre"
//         ? "Search by Genre"
//         : "Search";

//   return (
//     <div className="container">
//       <div className="group">
//         <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
//           <g>
//             <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
//           </g>
//         </svg>
//         <input
//           placeholder={placeholderText}
//           type="search"
//           className="input"
//           value={searchText}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//           onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
//         />
//         {searchOption === "Genre" && showDropdown && genres.length > 0 && (
//           <div className="dropdown-genres">
//             {filteredGenres.length > 0 ? (
//               filteredGenres.map((genre, index) => (
//                 <div
//                   key={index}
//                   className="dropdown-item"
//                   onClick={() => handleGenreClick(genre)}
//                 >
//                   {genre}
//                 </div>
//               ))
//             ) : (
//               <div className="dropdown-item">No  resuts found</div>
//             )}
//           </div>
//         )}
//       </div>
//       <div className="radio-inputs">
//         <label className="radio">
//           <input
//             type="radio"
//             name="radio"
//             value="Title"
//             checked={searchOption === "Title"}
//             onChange={(e) => handleOptionChange(e.target.value)}
//           />
//           <span className="name">Title</span>
//         </label>
//         <label className="radio">
//           <input
//             type="radio"
//             name="radio"
//             value="Author"
//             checked={searchOption === "Author"}
//             onChange={(e) => handleOptionChange(e.target.value)}
//           />
//           <span className="name">Author</span>
//         </label>
//         <label className="radio">
//           <input
//             type="radio"
//             name="radio"
//             value="Genre"
//             checked={searchOption === "Genre"}
//             onChange={(e) => handleOptionChange(e.target.value)}
//           />
//           <span className="name">Genre</span>
//         </label>
//       </div>
//       <button onClick={handleSearch}>
//         Search
//         <div className="arrow-wrapper">
//           <div className="arrow"></div>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default SearchBar;

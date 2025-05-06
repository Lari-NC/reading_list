import "./App.css";
// import Search from "./components/search/Search";
import Header from "./components/header/Header";
import Books from "./components/books/Books";

function App() {
  return (
    // <div className="container">
    //   <h1 className="title">Reading List</h1>
    //   <div className="search">
    //     <Search />
    //   </div>
    // </div>
    <>
      <Header />
      <Books />
    </>
  );
}

export default App;

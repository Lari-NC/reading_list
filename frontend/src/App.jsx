import "./App.css";
// import Search from "./components/search/Search";
import Header from "./components/header/Header";
import Books from "./components/books/Books";

function App() {
  return (
    <div className="template">
      <Header />
      <div className="content">
        <Books />
      </div>
    </div>
  );
}

export default App;

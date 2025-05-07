import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import BookById from "./components/books/BookById";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/books/:id" element={<BookById />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

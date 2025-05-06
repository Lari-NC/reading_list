import { useEffect, useState } from "react";
import "./Books.css"
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/book")
          .then((res) => res.json())
          .then((data) => setBooks(data))
          .catch((error) => console.error("Error fetching books:", error));
      }, []);

    return (
        <div className="books-container">
            <div className="books-grid">
                {books.map((b) => (
                    <Book key={b.id} book={b}/>
                ))}
            </div>
        </div>
    );
}

export default Books;
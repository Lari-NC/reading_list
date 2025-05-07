import "./Books.css"
import Book from "./Book";

const Books = ({ books }) => {

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
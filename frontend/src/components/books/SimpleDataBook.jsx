import { Link } from 'react-router';
import './SimpleDataBook.css';

const SimpleDataBook = ({ book }) => {
    const authorNames = book.authors.map(author => author.name).join(', ');

    return (
        <div className="SimpleDataBook">
            <Link className="book-link" key={book.id} to={`/books/${book.id}`}>
                <p className="bookTitle">{book.title}</p>
            </Link>
            <p className="author">{authorNames}</p>
        </div>
    );
};

export default SimpleDataBook;
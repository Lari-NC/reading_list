import './SimpleDataBook.css';

const SimpleDataBook = ({ book }) => {
    const authorNames = book.authors.map(author => author.name).join(', ');

    return (
        <div className="SimpleDataBook">
            <p className="bookTitle">{book.title}</p>
            <p className="author">Authors: {authorNames}</p>
        </div>
    );
};

export default SimpleDataBook;
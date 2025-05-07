import SimpleDataBook from './SimpleDataBook';
import './Book.css';
import FavButton from '../FavButton';

const Book = ({ book }) => {

    const formatGenre = (genre) => 
        genre
          .toLowerCase()
          .split('_')
          .map(word => word[0].toUpperCase() + word.slice(1))
          .join(' ');

    return (
        <div className="book">
            <div className="book-top">
                <img src={book.cover} alt={`${book.title}`} />
            <FavButton bookId={book.id} isFav={book.isFavorite} />
            </div>
            <div className="horizontal-line"></div>
            <div className="book-bottom">
                <SimpleDataBook book={book}/>
                <p className="book-genre">{book.genre ? formatGenre(book.genre) : "Unknown"}</p>
            </div>
        </div>
    );
};

export default Book;
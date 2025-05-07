import { data, useParams } from "react-router";
import "./BookById.css";
import { useEffect, useState } from "react";
import Header from "../header/Header";

const BookById = () => {
    const { id } = useParams();
    // const [title, setTitle] = useState("");
    // const [authors, setAuthors] = useState("");
    // const [genre, setGenre] = useState("");
    // const [cover, setCover] = useState("");
    // const [synopsis, setSynopsis] = useState("");
    // const [year, setYear] = useState("");
    // const [isFavorited, setIsFavorited] = useState(false);
    // const [isbn, setIsbn] = useState("");
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                fetch(`http://localhost:3000/books/${id}`)
                    .then((res) => res.json())
                    // .then((data) => {
                    //     setAuthors(data.authors?.map(author => author.name).join(', '));
                    //     setTitle(data.title);
                    //     setGenre(data.genre);
                    //     setCover(data.cover);
                    //     setSynopsis(data.synopsis);
                    //     setYear(data.year);
                    //     setIsFavorited(data.isFavorited);
                    //     setIsbn(data.isbn);
                    .then((data) => {
                        const authorNames = data.authors?.map(author => author.name).join(', ');
                        console.log(authorNames);
                        setBook({ ...data, authors: authorNames });
                    })
            } catch (err) {
                setError(err.message);
            }
        }
        fetchBooks();
    }, []);

    // const authorNames = authors?.map(author => author.name).join(', ');

    return (
        <div className="book-by-id">
            <Header />
            {book &&
                <div className="book-horizontal">
                    <div className="book-photo">
                        <img src={book.cover} alt={book.title} />
                    </div>
                    <div className="info">
                        <p className="info-title">{book.title}</p>
                        <p className="info-author">Authors: {book.authors}</p>
                        <div className="extra-info">
                            <p className="info-year">{book.year}</p>
                            <p className="info-genre">{book.genre}</p>
                        </div>
                        <p className="isbn"> ISBN: {book.isbn} </p>
                        <p className="synopsis">Synopsis: "{book.synopsis}"</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default BookById;
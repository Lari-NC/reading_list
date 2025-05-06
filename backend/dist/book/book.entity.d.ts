import Author from '../author/author.entity';
export declare class Book {
    id: number;
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    isbn: string;
    authors: Author[];
}
export default Book;

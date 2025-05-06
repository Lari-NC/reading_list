import Author from '../../author/entities/author.entity';
import { Genre } from '../../common/enums/genre.enum';
export declare class Book {
    id: number;
    title: string;
    pages: number;
    genre: Genre;
    cover: string;
    synopsis: string;
    year: number;
    isbn: string;
    authors: Author[];
    isFavorite: boolean;
}
export default Book;

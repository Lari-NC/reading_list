import Author from 'src/author/entities/author.entity';
import { Genre } from '../../common/enums/genre.enum';
export declare class CreateBookDto {
    title: string;
    pages: number;
    genre: Genre;
    cover: string;
    synopsis: string;
    year: number;
    isbn: string;
    authors: Author[];
}

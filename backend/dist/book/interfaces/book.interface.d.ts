import Author from 'src/author/author.entity';
export interface Book {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    isbn: string;
    authors: Author[];
}

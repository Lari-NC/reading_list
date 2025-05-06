import Author from 'src/author/author.entity';

export class CreateBookDto {

  title: string;

  pages: number;

  genre: string;

  cover: string;

  synopsis: string;

  year: number;

  isbn: string;

  authors: Author[];
}

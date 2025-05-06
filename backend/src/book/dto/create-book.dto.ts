import Author from 'src/author/entities/author.entity';
import { IsNumber, IsString } from 'class-validator';
import { Genre } from '../../common/enums/genre.enum';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsNumber()
  pages: number;

  genre: Genre;

  @IsString()
  cover: string;

  @IsString()
  synopsis: string;

  @IsNumber()
  year: number;

  @IsString()
  isbn: string;

  authors: Author[];
}

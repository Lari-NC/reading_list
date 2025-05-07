import {
  Entity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
  JoinTable,
} from 'typeorm';
import Author from '../../author/entities/author.entity';
import { Genre } from '../../common/enums/genre.enum';

@Entity()
@Unique(['isbn'])
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column()
  pages: number;

  @Column()
  genre: Genre;

  @Column()
  cover: string;

  @Column()
  synopsis: string;

  @Column()
  year: number;

  @Column()
  isbn: string;

  @ManyToMany(() => Author, (author) => author.books, {
    eager: false,
  })
  @JoinTable()
  authors: Author[];

  @Column({ default: false })
  isFavorite: boolean;
}

export default Book;

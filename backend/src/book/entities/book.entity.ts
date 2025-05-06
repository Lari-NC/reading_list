import {
  Entity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
  JoinTable,
} from 'typeorm';
import Author from '../author/author.entity';

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
  genre: string;

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
}

export default Book;

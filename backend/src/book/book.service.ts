import { Inject, Injectable } from '@nestjs/common';
import Book from './book.entity';
import { Like, Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private bookRepository: Repository<Book>,
  ) {}

  async createBook(createBookDto: CreateBookDto) {
    const book = this.bookRepository.create(createBookDto);
    await this.bookRepository.save(book);
  }

  async findAll(
    title?: string,
    author?: string,
    genre?: string,
  ): Promise<any[]> {
    const where = {};

    if (title) {
      where['title'] = Like(`%${title}%`);
    }
    if (author) {
      where['authors'] = { name: Like(`%${author}%`) };
    }
    if (genre) {
      where['genre'] = Like(`%${genre}%`);
    }

    // return this.bookRepository.find({
    //   where,
    //   relations: ['authors'],
    // });

    const books = await this.bookRepository.find({
      where,
      relations: ['authors', 'authors.books'], 
    });

    return books.map((book) => {
      const { id, authors, ...bookWithoutId } = book;

      const authorsFormatted = authors.map((author) => {
        const { id, books, ...authorWithoutId } = author;

        const booksFormatted = books.map(({ id, ...b }) => b);

        return {
          ...authorWithoutId,
          books: booksFormatted,
        };
      });

      return {
        ...bookWithoutId,
        authors: authorsFormatted,
      };
    });
  }
}

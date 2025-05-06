import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import Book from './entities/book.entity';
import { Like, Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
// import Author from '../author/entities/author.entity';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private bookRepository: Repository<Book>,
    //
    // @Inject('AUTHOR_REPOSITORY')
    // private authorRepository: Repository<Author>,
  ) {}

  async createBook(createBookDto: CreateBookDto) {
    const book = this.bookRepository.create(createBookDto);
    await this.bookRepository.save(book);
  }

  // async createBook(createBookDto: CreateBookDto) {
  //   const authorNames = createBookDto.authors.map((a) => a.name);
  //
  //   const authors = await this.authorRepository.find({
  //     where: authorNames.map((name) => ({ name })),
  //   });
  //
  //   const book = this.bookRepository.create({
  //     ...createBookDto,
  //     authors,
  //   });
  //
  //   await this.bookRepository.save(book);
  // }

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

  // book.service.ts

  async findById(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Libro con id ${id} no encontrado`);
    }
    return book;
  }

  async updateFavorite(id: number, isFavorite: boolean) {
    const book = await this.bookRepository.findOneBy({ id });
    if (!book) throw new NotFoundException();
    book.isFavorite = isFavorite;
    return this.bookRepository.save(book);
  }
}

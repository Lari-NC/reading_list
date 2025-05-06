import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto);
  }

  @Get()
  async findAll(
    @Query('title') title?: string,
    @Query('author') author?: string,
    @Query('genre') genre?: string,
  ): Promise<Book[]> {
    return this.bookService.findAll(title, author, genre);
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
// import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { Genre } from '../common/enums/genre.enum';
import Book from './entities/book.entity';

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
  ): Promise<any[]> {
    return this.bookService.findAll(title, author, genre);
  }

  @Get(':id')
  async findById(@Query('id') id?: number): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Get('genres')
  getGenres(): string[] {
    return Object.values(Genre);
  }

  @Patch(':id/favorite')
  updateFavorite(
    @Param('id') id: number,
    @Body('isFavorite') isFavorite: boolean,
  ) {
    return this.bookService.updateFavorite(id, isFavorite);
  }
}

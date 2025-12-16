import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepo: Repository<Book>,
  ) {}

  findAll() {
    return this.booksRepo.find();
  }

  create(dto: CreateBookDto) {
    const book = this.booksRepo.create(dto);
    return this.booksRepo.save(book);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepo: Repository<Book>,
  ) {}

  findAll() {
    return this.booksRepo.find();
  }

 async findOne(id: number) {
  const book = await this.booksRepo.findOne({ where: { id } });
  if (!book) {
    throw new NotFoundException(`Book with id ${id} not found`);
  }
  return book;
}

  create(dto: CreateBookDto) {
    const book = this.booksRepo.create(dto);
    return this.booksRepo.save(book);
  }

async update(id: number, dto: any) {
  const book = await this.booksRepo.findOne({ where: { id } });
  if (!book) {
    throw new NotFoundException(`Book with id ${id} not found`);
  }
  Object.assign(book, dto);
  return this.booksRepo.save(book);
}

 async remove(id: number) {
  const result = await this.booksRepo.delete(id);
  if (result.affected === 0) {
    throw new NotFoundException(`Book with id ${id} not found`);
  }
  return { message: `Book ${id} deleted` };
}

  

  
}

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BooksService } from './books.service';
import { Book } from './book.entity';

describe('BooksService', () => {
  let service: BooksService;

  const repoMock: Partial<Record<keyof Repository<Book>, jest.Mock>> = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getRepositoryToken(Book),
          useValue: repoMock,
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

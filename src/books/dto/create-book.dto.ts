import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ example: 'Clean Code' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Robert C. Martin' })
  @IsString()
  author: string;

  @ApiProperty({ example: '9780132350884' })
  @IsString()
  isbn: string;

  @ApiProperty({ example: 29.99 })
  @IsNumber()
  price: number;
}

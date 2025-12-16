import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: '127.0.0.1', // porque Nest corre en tu PC
        port: Number(config.get('MYSQL_PORT')), // 3307
        username: config.get('MYSQL_USER'),      // bookstore
        password: config.get('MYSQL_PASSWORD'),  // bookstore
        database: config.get('MYSQL_DATABASE'),  // bookstore
        autoLoadEntities: true,
        synchronize: true, // dev only
      }),
    }),
  ],
})
export class AppModule {}

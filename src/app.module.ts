import { Module } from '@nestjs/common';
import { EmailsModule } from './emails/emails.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://@cluster0.lio8f74.mongodb.net/?retryWrites=true&w=majority',
      synchronize: true,
      autoLoadEntities: true,
      useUnifiedTopology: true,
    }),
    EmailsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
      })
  ],
})
export class AppModule {}

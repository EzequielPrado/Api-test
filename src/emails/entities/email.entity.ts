import { ObjectType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { Entity, PrimaryColumn, Column, Unique, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType()
@Unique(['email'])
export class Email {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  @Field(() => String, { description: 'E-mail' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column()
  @Field(() => String, { description: 'Nome' })
  @IsNotEmpty()
  nome: string;

  @Column()
  @Field(() => String, { description: 'Idade' })
  @IsNotEmpty()
  idade: string;
}

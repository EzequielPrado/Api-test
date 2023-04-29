import { CreateEmailInput } from './create-email.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';

@InputType()
export class UpdateEmailInput extends PartialType(CreateEmailInput) {
  @Field(() => String, { description: 'E-mail' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String, { description: 'Nome' })
  @IsNotEmpty()
  nome: string;

  @Field(() => String, { description: 'Idade' })
  @IsNotEmpty()
  idade: string;
}

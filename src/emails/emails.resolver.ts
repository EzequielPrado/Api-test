import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmailsService } from './emails.service';
import { Email } from './entities/email.entity';
import { CreateEmailInput } from './dto/create-email.input';
import { UpdateEmailInput } from './dto/update-email.input';

@Resolver(() => Email)
export class EmailsResolver {
  constructor(private readonly emailsService: EmailsService) {}

  @Mutation(() => Email)
  async createEmail(
    @Args('createEmailInput') createEmailInput: CreateEmailInput,
  ) {
    return await this.emailsService.create(createEmailInput);
  }

  @Query(() => [Email], { name: 'emails' })
  async findAll() {
    return await this.emailsService.findAll();
  }

  @Query(() => Email, { name: 'email' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.emailsService.findOne(id);
  }

  @Mutation(() => Email)
  async updateEmail(@Args('updateEmailInput') updateEmailInput: UpdateEmailInput,
  ) {
    return await this.emailsService.update(updateEmailInput);
  }

  @Mutation(() => Email)
  async removeEmail(@Args('id', { type: () => Int }) id: number) {
    return await this.emailsService.remove(id);
  }
}

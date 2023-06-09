import { Injectable } from '@nestjs/common';
import { CreateEmailInput } from './dto/create-email.input';
import { UpdateEmailInput } from './dto/update-email.input';
import { Email } from './entities/email.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validateOrReject } from 'class-validator';

@Injectable()
export class EmailsService {
  constructor(
    @InjectRepository(Email) private emailRepository: Repository<Email>,
  ) {}
  async create(createEmailInput: CreateEmailInput) {
    const createEmail = new Email();
    Object.assign(createEmail, createEmailInput);
    await validateOrReject(createEmail);
    await this.emailRepository.save(createEmail);
    return createEmail;
  }

  async findAll() {
    return await this.emailRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  async update(updateEmailInput: UpdateEmailInput) {
    return `This action updates a email`;
  }

  async remove(id: number) {
    return `This action removes a #${id} email`;
  }
}

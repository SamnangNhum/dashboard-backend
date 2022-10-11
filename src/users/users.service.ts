import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>){}

    findAllUsers(): Promise<Users[]> {
        return this.usersRepository.find();
    }
    insertUsers(data) {
          return  this.usersRepository.insert(data)
    }
}

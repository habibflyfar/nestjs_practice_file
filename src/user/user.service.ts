import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../typeorm/user.entity';

@Injectable()
export class UsersService {
    
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    
    async createUser(user: User) {
        this.usersRepository.save(user);
    }

    async getUsers() {
        return await this.usersRepository.find();
    }

    async updateUser(id: number,  user: User){
        return await this.usersRepository.update(id, user);
    }

    async deleteUser(id: number) {
        this.usersRepository.delete(id);
    }
}
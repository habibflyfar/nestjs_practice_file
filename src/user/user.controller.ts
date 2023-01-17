import { UsersService } from './user.service';
import { UserDto } from './User.Dto';
import { Body, Controller, Get, Param, Post, Req, Res, Delete,Patch, Put } from '@nestjs/common';
import { User } from '../typeorm/user.entity';
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor (private userService : UsersService){}
    @Get('all')
    getAllUser(){
        return this.userService.getUsers();
    }
    @Post('create')
    create(@Body() user: User){ 
          return this.userService.createUser(user);
    }
    @Delete(':id')
    delete(@Param('id') id: number){
        return this.userService.deleteUser(id);
    }

   @Put(':id')
   editUser(@Body() user: User, @Param('id') id: number ){
    return this.userService.updateUser (id, user)
   }
   
}

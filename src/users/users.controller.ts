
import { CreateUserDto } from './dtos/CreateUser.dto';
import { Controller, Get,UsePipes, ValidationPipe } from '@nestjs/common';
import { Body, Param, Post, Query, Req, Res } from '@nestjs/common/decorators';
import { Request, Response, response } from 'express';


@Controller('users')
export class UsersController {
    @Get()
    getUser(){
        return {
            name: "kawcher habib",
            email: "kawcher@gmail.com"
        };
    };
    @Get('userPost')
    getUserPost(){
       return [
        {
            username: 'habib',
            email: 'habib@gmail.com',
            post:[
                {
                    id:1,
                    title: "Post 1"
                },{
                    id:2,
                    title: "Post 2"
                }
            ]
        }
       ]
    }
    @Get("post/comments")
    getUsercomments(){
        return [
            {
                posts:[
                    {
                        id: 3,
                        title: "This is user comment Post"
                    },
                    {
                        id: 4,
                        title: "This is  user comment post four"
                    }
                ]
            }
        ]
    }


    // @Post()
    // createUser(@Req() request: Request, @Res() response: Response ){
    //     console.log(request.body);
    //     response.send("Created");
    // }
    @Post('create')
    createUser(@Body() userData: CreateUserDto ){
       console.log(userData);
       return{};
    }

    // @Get(':id/:postId')
    // getUserById(@Param('id') id: string, @Param('postId') postId: string){
    //     console.log(id);
    //     return {
    //         id,
    //         postId
    //     }
    // }
    // @Get()
    // getUserData(@Query('sortBy') sortBy: string){
    //     console.log(sortBy);
    //     return[{name:"habib", email:"habib@gmail.com"}]
    // }
    @Post('getValidData')
    @UsePipes(new ValidationPipe() )
    getValidDat(@Body() userData: CreateUserDto){
        return {};

    }
}

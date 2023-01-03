import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";



export class CreateUserDto{
 @IsNotEmpty()
 @IsString()
    name: string;
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsInt()
    phone:number;

}
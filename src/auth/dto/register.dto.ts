import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength,  } from "class-validator";

export class RegisterDto {

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(3)
    name:string;

    @Transform(({ value }) => value.trim())
    @IsString()
    lastname: string;
    

    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(6)
    password: string;
    
    role: string;
}
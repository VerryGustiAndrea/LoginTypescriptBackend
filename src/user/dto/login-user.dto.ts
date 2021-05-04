
import {
    IsEmail,
    IsString,
    IsNumber,
    IsOptional,
    IsMobilePhone,
    IsDateString,
    IsEthereumAddress,
    IsBtcAddress,
    IsNotEmpty,
    ValidateNested,
    IsAlphanumeric,
    IsAlpha,
    MinLength,
    MaxLength,
    isAlphanumeric,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class LoginUserDto extends PartialType(CreateUserDto) {

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    id?: number;
    // @IsOptional()

    @IsNotEmpty()
    @MinLength(5)
    // @IsOptional()
    @IsAlphanumeric()
    username?: string;

    // @IsOptional()
    // @Type(() => Number)
    // @IsNumber()
    @IsNotEmpty()
    @MinLength(5)
    // @IsOptional()
    @IsAlphanumeric()
    password?: string;


}

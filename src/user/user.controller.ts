import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Response, ErrorResponse } from '../library';
import response from 'src/library/response';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }



  @Get()
  async findAll() {
    const response = await this.userService.findAll();
    return Response(response, 'Success', 200);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    console.log(loginUserDto)
    try {
      const response = await this.userService.login(loginUserDto);
      return Response(response, 'Success', 200);
    } catch (error) {
      return ErrorResponse(error)
    }
  }


  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

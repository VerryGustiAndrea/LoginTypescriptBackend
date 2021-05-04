import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }


  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async login(loginUserDto: LoginUserDto) {

    const response = await this.userModel.findOne({ where: { username: loginUserDto.username } });
    if (!response) {
      console.log("ini")
      throw new Error("Username not found");
    } else {
      if (response.password == loginUserDto.password) {
        return response
      } else {
        throw new Error("Password not match");
      }
    }
  }


  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

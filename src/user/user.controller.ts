// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Controller('user')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Post()
//   create(@Body() createUserDto: CreateUserDto) {
//     return this.userService.create(createUserDto);
//   }

//   @Get()
//   findAll() {
//     return this.userService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.userService.findOne(+id);
//   }

//    @Get('age/:age')
//   findOneage(@Param('age') age: string) {
//     return this.userService.findOneage(+age);
//   }


//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.userService.update(+id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.userService.remove(+id);
//   }
// }
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto); // <-- changed
  }

  @Get()
  findAll() {
    return this.userService.getAllUsers(); // <-- changed
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getUserById(+id); // <-- changed
  }

  @Get('age/:age')
  findOneage(@Param('age') age: string) {
    return this.userService.getUsersByAge(+age); // <-- changed
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(+id, updateUserDto); // <-- changed
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(+id); // <-- changed
  }
}

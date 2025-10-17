// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './entities/user.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([User])],
//   controllers: [UserController],
//   providers: [UserService],
// })
// export class UserModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}

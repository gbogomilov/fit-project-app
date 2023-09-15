import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { User, UserSchema } from './users/users.model';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gbogomilov:g5sQDSQxrREKE78j@cluster0.n35kjmi.mongodb.net/?retryWrites=true&w=majority'
    ),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController, UsersController, LoginController],
  providers: [AppService, UsersService, LoginService],
})
export class AppModule {}

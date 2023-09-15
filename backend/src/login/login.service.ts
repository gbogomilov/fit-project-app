import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../users/users.model';

@Injectable()
export class LoginService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async login(userData: {
    username: string;
    password: string;
  }): Promise<User[]> {
    return this.userModel
      .find()
      .exec()
      .then((users) => {
        const foundUser = users.find((user) => {
          if (
            user.name === userData.username &&
            user.password === userData.password
          ) {
            return user;
          }
        });
        return foundUser
          ? ({
              message: 'success',
              userName: userData.username,
            } as unknown as User[])
          : ({
              message: 'incorrect username or password',
            } as unknown as User[]);
      });
  }
}

import { Model } from 'mongoose';
import { User } from './users.model';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(userData: any): Promise<User>;
    findAll(): Promise<User[]>;
}

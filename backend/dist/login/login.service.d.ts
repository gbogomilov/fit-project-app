import { Model } from 'mongoose';
import { User } from '../users/users.model';
export declare class LoginService {
    private userModel;
    constructor(userModel: Model<User>);
    login(userData: {
        username: string;
        password: string;
    }): Promise<User[]>;
}

import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    age?: number;
    gender?: string;
    password?: string;
}, mongoose.Document<unknown, {}, {
    name?: string;
    age?: number;
    gender?: string;
    password?: string;
}> & {
    name?: string;
    age?: number;
    gender?: string;
    password?: string;
} & {
    _id: mongoose.Types.ObjectId;
}>;

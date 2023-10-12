import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Exersies } from "./exersises.model";

@Injectable()
export class ExersisesService {
  constructor(
    @InjectModel(Exersies.name)
    private exersiseModel: Model<Exersies>
  ) {}

  async create(userData: any): Promise<Exersies> {
    const exersie = new this.exersiseModel(userData);
    return exersie.save();
  }

  async findAll(): Promise<Exersies[]> {
    return this.exersiseModel.find().exec();
  }
  async delete(exersiseData: any): Promise<Exersies> {
    return this.exersiseModel.deleteOne(exersiseData).exec() as any;
  }
  async update(exersiseData: any): Promise<Exersies> {
    return this.exersiseModel
      .updateOne({ _id: exersiseData._id }, exersiseData)
      .exec() as any;
  }
}

import { Controller, Post, Get, Delete, Put, Body } from "@nestjs/common";
import { ExersisesService } from "./exersises.service";

@Controller("exersises")
export class ExersisesController {
  constructor(private readonly exersisesService: ExersisesService) {}

  @Post()
  async create(@Body() exersiseData: any) {
    return this.exersisesService.create(exersiseData);
  }
  @Get()
  async findAll() {
    return this.exersisesService.findAll();
  }
  @Delete()
  async delete(@Body() exersiseData: any) {
    return this.exersisesService.delete(exersiseData);
  }
  @Put()
  async update(@Body() exersiseData: any) {
    return this.exersisesService.update(exersiseData);
  }
}

import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { TodoCreateInput, TodoFindAllQuery, TodoUpdateInput } from "./dtos";
import { AuthenticationGuard, CurrentUser } from "../authentication";
import { User } from "@prisma/client";
import { TodoService } from "./todo.service";

@Controller("/todo")
@UseGuards(AuthenticationGuard)
export class TodoController {
  public constructor(private readonly todoService: TodoService) {}

  @Get()
  public async findAll(@CurrentUser() user: User, @Query() query: TodoFindAllQuery) {
    return this.todoService.findAll(user.id, query);
  }

  @Get(":id")
  public async findById(@CurrentUser() user: User, @Param("id") id: string) {
    return this.todoService.findById(user.id, id);
  }

  @Post()
  public async create(@CurrentUser() user: User, @Body() data: TodoCreateInput) {
    return this.todoService.create(user.id, data);
  }

  @Put(":id")
  public async update(@Param("id") id: string, @Body() data: TodoUpdateInput) {
    return this.todoService.update(id, data);
  }
}

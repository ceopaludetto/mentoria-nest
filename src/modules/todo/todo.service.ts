import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma";
import { TodoCreateInput, TodoFindAllQuery, TodoUpdateInput } from "./dtos";

@Injectable()
export class TodoService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findAll(userId: string, { s }: TodoFindAllQuery) {
    return this.prismaService.todo.findMany({ where: { userId, content: { contains: s, mode: "insensitive" } } });
  }

  public async findById(userId: string, id: string) {
    return this.prismaService.todo.findFirstOrThrow({ where: { id, userId } });
  }

  public async create(userId: string, { content }: TodoCreateInput) {
    return this.prismaService.todo.create({
      data: { content, userId },
    });
  }

  public async update(id: string, { content, completed }: TodoUpdateInput) {
    return this.prismaService.todo.update({ where: { id }, data: { content, completed } });
  }
}

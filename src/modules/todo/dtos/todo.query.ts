import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class TodoFindAllQuery {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public s?: string;
}

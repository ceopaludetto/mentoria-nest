import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class TodoCreateInput {
  @IsString()
  @IsNotEmpty()
  public content!: string;
}

export class TodoUpdateInput {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public content?: string;

  @IsBoolean()
  @IsOptional()
  public completed?: boolean;
}

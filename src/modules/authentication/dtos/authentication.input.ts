import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthenticationSignInInput {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  public email!: string;

  @IsString()
  @IsNotEmpty()
  public password!: string;
}

export class AuthenticationSignUpInput {
  @IsString()
  @IsNotEmpty()
  public name!: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  public email!: string;

  @IsString()
  @IsNotEmpty()
  public password!: string;
}

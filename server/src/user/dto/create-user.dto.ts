import { IsEmail, Length, Matches, Min } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @Length(2)
    username: string;

    @Length(8, 30, {message: 'Password is too short'})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/, {
        message: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
    })
    password: string;
}

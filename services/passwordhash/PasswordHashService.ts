import {IPasswordHashService} from "./IPasswordHashService";
import bcrypt from "bcrypt"

export class PasswordHashService implements IPasswordHashService{
    constructor() {

    }

    private bcryptService = bcrypt

     async HashPassword(vanillaPassword : string) : Promise<string> {
        const saltRounds = 5
        let hashedPassword : string = ""
        hashedPassword = await this.bcryptService.hash(vanillaPassword, saltRounds)
        return hashedPassword
    }

    async ComparePassword(vanillaPassword: string): Promise<boolean> {
        const check = await this.bcryptService.compare(vanillaPassword,)
        return false;
    }



}
export interface IPasswordHashService {
    HashPassword(vanillaPassword : string) : Promise<string>
    ComparePassword(vanillaPassword : string) : Promise<boolean>
}
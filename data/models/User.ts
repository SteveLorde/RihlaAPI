import {uuidService} from "../../services/ServicesContainer";

export class User {
    constructor() {
        this.userId = uuidService.GenerateID()
    }
    userId : string
    name : string = ""
    hashedPassword = ""

}
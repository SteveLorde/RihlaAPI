import {uuidService} from "../../services/ServicesContainer";

export class User {
    constructor() {}
    userId : string = uuidService.GenerateID()
}
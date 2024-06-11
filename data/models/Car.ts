import {uuidService} from "../../services/ServicesContainer";

export class Car {
    constructor() {
        this.id = uuidService.GenerateID()
    }

    id : string
    driverId : string = ""
    type : string = ""
    manufacturer : string = ""
    modelName : string = ""
}
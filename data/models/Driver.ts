import {User} from "./User";
import {Ride} from "./Ride";
import {Car} from "./Car";
import {uuidService} from "../../services/ServicesContainer";

export class Driver extends User{
    constructor() {
        super();
        this.driverId = uuidService.GenerateID()
    }

    driverId : string = ""
    car : Car = {} as Car
    previousRides : Ride[] = []

}
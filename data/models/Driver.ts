import {User} from "./User";
import {Ride} from "./Ride";
import {Car} from "./Car";

export interface Driver {
    id : string
    userId : string
    car : Car
    previousRides : Ride[]
    user : User
}
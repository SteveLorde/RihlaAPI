import {MapLocation} from "./MapLocation";
import {User} from "./User";
import {Driver} from "./Driver";

export class Ride {

    constructor(driver : Driver,user: User) {
        this.driverId = driver.id
        this.userId = user.userId
    }

    driverId : string = ""
    userId : string = ""
    driver : User = { } as User
    user : User = { } as User
    sourceGeo : MapLocation = {} as MapLocation
    destinationGeo : MapLocation  = {} as MapLocation
    sourceName : string = ""
    destinationName : string = ""
    fare : number = 0
    date: string = ""
}
import {RideRequestDTO} from "../../data/dto/requests/RideRequestDTO";
import {IRideService} from "./IRideService";

export class RideService implements IRideService{
    constructor() {
    }

    CalculateFare(distance : number) {
        let fare : number = 0
        while (distance > 0) {
            distance -= 100
            fare += 3
        }
        return fare
    }

    async InitiateRide(rideReq : RideRequestDTO) {

    }

    async SaveRide() {

    }
}
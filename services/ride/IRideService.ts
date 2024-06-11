import {RideRequestDTO} from "../../data/dto/requests/RideRequestDTO";

export interface IRideService {
    InitiateRide(rideReq : RideRequestDTO) : Promise<any>
    SaveRide() : Promise<any>
}
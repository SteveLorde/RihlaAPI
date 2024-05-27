import {MapLocation} from "../../models/MapLocation";

export interface RoutingRequestDTO {
    startLocation : MapLocation
    destinationLocation : MapLocation
}
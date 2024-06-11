import {MapLocation} from "../../data/models/MapLocation";
import {MapRoute} from "../../data/dto/MapRoute";

export interface IRoutingService {
    ProcessRoute(startLocation : MapLocation, destinationLocation: MapLocation) : Promise<MapRoute>
}
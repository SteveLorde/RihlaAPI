import {MapLocation} from "../../data/models/MapLocation";
import axios from "axios";
import {MapRoute} from "../../data/dto/MapRoute";
import {IRoutingService} from "./IRoutingService";

export class RoutingService implements IRoutingService{

    routeAPIURL: string = "https://router.project-osrm.org/route/v1/driving"

    constructor() {
    }



    async ProcessRoute(startLocation : MapLocation, destinationLocation: MapLocation) {
        const res = await axios.post(`${this.routeAPIURL}/${startLocation.longtitude},${startLocation.altitude};${destinationLocation.longtitude},${destinationLocation.altitude}`).then(res => res.data)
        const mapRoute = {coordinates: res["routes"]["geometry"]["coordinates"]} as MapRoute
        return mapRoute
    }


}
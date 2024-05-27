import {MapLocation} from "../../data/models/MapLocation";
import axios from "axios";

export class RoutingService{

    routeAPIURL: string = ""

    constructor() {
    }



    async ProcessRoute(startLocation : MapLocation,DestinationLocation: MapLocation) {
        return await axios.post(`${this.routeAPIURL}`).then(res => res.data)
    }


}
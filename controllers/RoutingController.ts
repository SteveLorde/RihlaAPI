//This is concerned with Map Roouting
import {Request,Response} from "express"
import {router} from "./BaseController"
import {RoutingRequestDTO} from "../data/dto/requests/RoutingRequestDTO";
import {routingService} from "../services/ServicesContainer";

router.post('', (req : Request<RoutingRequestDTO>, res : Response<>) => {
    const startLocationReq = req.params.startLocation
    const destinationLocationReq = req.params.destinationLocation
    return routingService.ProcessRoute(startLocationReq,destinationLocationReq)
})




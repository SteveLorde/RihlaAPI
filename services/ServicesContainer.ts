import {RoutingService} from "./routing/RoutingService";
import {RideService} from "./ride/RideService";
import {PasswordHashService} from "./passwordhash/PasswordHashService";

export const routingService = new RoutingService()
export const rideService = new RideService()
export const passwordHashService = new PasswordHashService()
import {RoutingService} from "./routing/RoutingService";
import {RideService} from "./ride/RideService";
import {PasswordHashService} from "./passwordhash/PasswordHashService";
import {DataContext} from "../data/DataContext";
import {IUUIDService} from "./UUID/IUUIDService";
import {UUIDService} from "./UUID/UUIDService";

export const routingService = new RoutingService()
export const rideService = new RideService()
export const passwordHashService = new PasswordHashService()
export const uuidService : IUUIDService = new UUIDService()
export const dbService : DataContext = new DataContext()
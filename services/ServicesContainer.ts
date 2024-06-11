import {RoutingService} from "./routing/RoutingService";
import {RideService} from "./ride/RideService";
import {PasswordHashService} from "./passwordhash/PasswordHashService";
import {DataContext} from "../data/DataContext";
import {IUUIDService} from "./UUID/IUUIDService";
import {UUIDService} from "./UUID/UUIDService";
import {IDataSeed} from "./DataSeed/IDataSeed";
import {DataSeed} from "./DataSeed/DataSeed";

export const routingService = new RoutingService()
export const rideService = new RideService()
export const passwordHashService = new PasswordHashService()
export const uuidService : IUUIDService = new UUIDService()
export const dbContext : DataContext = new DataContext()
export const dataSeedService : IDataSeed = new DataSeed(dbContext)
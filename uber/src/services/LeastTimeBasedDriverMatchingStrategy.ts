import { Driver } from "../models/Driver";
import { Trip } from "../models/Trip";
import { TripMetadata } from "../models/TripMetadata";
import { DriverMatchingStrategyType, IDriverMatchingStrategy } from "./IDriverMatchingStrategy";

export class LeastTimeBasedDriverMatchingStrategy implements IDriverMatchingStrategy {
    
    matchDriver(trip: TripMetadata): Driver {
        return null;
    }

    getDriverMatchingStrategyName(): DriverMatchingStrategyType {
        return DriverMatchingStrategyType.LEAST_TIME_BASED_STRATEGY
    }

}
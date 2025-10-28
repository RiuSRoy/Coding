import { Driver } from "../models/Driver";
import { Trip } from "../models/Trip";
import { TripMetadata } from "../models/TripMetadata";

export interface IDriverMatchingStrategy {

    matchDriver(trip: TripMetadata): Driver;

    getDriverMatchingStrategyName(): DriverMatchingStrategyType
}


export enum DriverMatchingStrategyType {
    DEFAULT_DRIVER_MATCHING_STRATEGY = "default",
    LEAST_TIME_BASED_STRATEGY = "leastTimeBased",
}
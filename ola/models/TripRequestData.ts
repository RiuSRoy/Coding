import { BaseModel } from "./BaseModel";
import { Loc } from "./Trip";
import { VehicleSubType, VehicleType } from "./Vehicle";

export interface TripRequestData {
    userId: string,
    startLocation: Loc,
    endLocation: Loc,
    vehicleType: VehicleType,
    vehicleSubType: VehicleSubType,
    addOns: ADD_ON_REQUEST[],
}

export enum TripRequestStatus {
    REQUESTED = "REQUESTED",
    CANCELLED = "CANCELLED",
    ACCEPTED = "ACCEPTED",
}

export enum ADD_ON_REQUEST {
    "WIFI" = "WIFI",
    "PRIORITY_BOOKING" = "PRIORITY_BOOKING",
    "EXTRA_LUGGAGE" = "EXTRA_LUGGAGE",
}
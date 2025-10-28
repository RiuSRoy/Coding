import { IDriverMatchingStrategy } from "../strategy/IDriverMatchingStrategy";
import { IPriceStrategy } from "../strategy/IPriceStrategy";
import { BaseModel } from "./BaseModel";
import { OnlineDriver } from "./OnlineDriver";
import { TripRequestData } from "./TripRequestData";

export interface Trip extends BaseModel {
    tripRequest: TripRequestData,
    status: TripStatus,
    vehicleId?: string,
    otp: string,
    liveLoc?: Loc,
    price: number,
    driver?: OnlineDriver,
}

export enum TripStatus {
    REQUESTED = "REQUESTED",
    ACCEPTED = "ACCEPTED",
    STARTED = "STARTED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export type Loc = {
    lat: number,
    lng: number,
    address: string
}
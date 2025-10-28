import { PricingStrategyType } from "../services/IPricingStrategy";
import { BaseModel } from "./BaseModel";

export interface Trip extends BaseModel{
    price: number;
    driverId: number;
    riderId: number;
    src: Location;
    dest: Location;
    status: TripStatus,
    pricingStrategy: PricingStrategyType,

}


export type Location = {
    lat: number;
    lon: number;
}

type TripStatus = "COMPLETED"
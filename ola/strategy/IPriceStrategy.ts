import { TripRequestData } from "../models/TripRequestData";

export interface IPriceStrategy {
    tripRequestData: TripRequestData;
    calculatePrice(): number;
}
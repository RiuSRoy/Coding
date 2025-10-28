import { Driver } from "../models/Driver";
import { OnlineDriver } from "../models/OnlineDriver";
import { TripRequestData } from "../models/TripRequestData";

export interface IDriverMatchingStrategy {
    tripRequestData: TripRequestData;
    matchDriver(): OnlineDriver | null;
}
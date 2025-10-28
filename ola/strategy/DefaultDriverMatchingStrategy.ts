import DriverController from "../controllers/DriverController";
import OnlineDriverController from "../controllers/OnlineDriverController";
import { Driver } from "../models/Driver";
import { OnlineDriver } from "../models/OnlineDriver";
import { TripRequestData } from "../models/TripRequestData";
import { IDriverMatchingStrategy } from "./IDriverMatchingStrategy";

export class DefaultDriverMatchingStrategy implements IDriverMatchingStrategy{
    tripRequestData: TripRequestData;
    constructor(tripRequestData: TripRequestData) {
        this.tripRequestData = tripRequestData;
    }

    matchDriver(): OnlineDriver | null {
        const driversNearby = OnlineDriverController.listOnlineDrivers();
        if (driversNearby.length === 0) {
            return null;
        }
        return driversNearby[0];
    }
}

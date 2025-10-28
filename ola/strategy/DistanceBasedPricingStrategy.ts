import { ExtraLuggageDecorator } from "../decorator/ExtraLuggageDecorator";
import { PriorityBookingDecorator } from "../decorator/PriorityBookingDecorator";
import { WifiDecorator } from "../decorator/WifiDecorator";
import VehicleTypeFactory from "../factory/VehicleTypeFactory";
import { ADD_ON_REQUEST, TripRequestData } from "../models/TripRequestData";
import { IPriceStrategy } from "./IPriceStrategy";

export class DistanceBasedPriceStrategy implements IPriceStrategy{
    tripRequestData: TripRequestData;
    constructor(tripRequestData: TripRequestData) {
        this.tripRequestData = tripRequestData;
    }
    calculatePrice(): number {
        const distance = 50;
        
        let myVehicleType = VehicleTypeFactory
            .createVehicleType(this.tripRequestData.vehicleType, this.tripRequestData.vehicleSubType);
        if (this.tripRequestData.addOns.includes(ADD_ON_REQUEST.EXTRA_LUGGAGE)) {
            myVehicleType = new ExtraLuggageDecorator(myVehicleType, this.tripRequestData.vehicleType, this.tripRequestData.vehicleSubType);
        }
        if (this.tripRequestData.addOns.includes(ADD_ON_REQUEST.WIFI)) {
            myVehicleType = new WifiDecorator(myVehicleType, this.tripRequestData.vehicleType, this.tripRequestData.vehicleSubType);
        }
        if (this.tripRequestData.addOns.includes(ADD_ON_REQUEST.PRIORITY_BOOKING)) {
            myVehicleType = new PriorityBookingDecorator(myVehicleType, this.tripRequestData.vehicleType, this.tripRequestData.vehicleSubType);
        }
        const distanceMultiplier = myVehicleType.getDistanceMultiplier();
        return myVehicleType.getBaseCost() + distance * distanceMultiplier;
    }
}

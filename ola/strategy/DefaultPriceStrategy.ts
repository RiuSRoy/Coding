import { TripRequestData } from "../models/TripRequestData";
import { VehicleType } from "../models/Vehicle";
import { IPriceStrategy } from "./IPriceStrategy";

export class DefaultPriceStrategy implements IPriceStrategy{
    tripRequestData: TripRequestData;
    constructor(tripRequestData: TripRequestData) {
        this.tripRequestData = tripRequestData;
    }
    calculatePrice(): number {
        
        switch (this.tripRequestData.vehicleType) {
            case VehicleType.MOTO:
                return 500;
            case VehicleType.AUTO:
                return 600;
            case VehicleType.CAR:
                if (this.tripRequestData.vehicleSubType === 'GO') {
                    return 700
                } else if (this.tripRequestData.vehicleSubType === 'SEDAN') {
                    return 800
                } else if (this.tripRequestData.vehicleSubType === 'XL') {
                    return 900
                } else {
                    650
                }
        }
        return 650
    }
}

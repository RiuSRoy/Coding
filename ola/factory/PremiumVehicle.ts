import { Vehicle, VehicleSubType, VehicleType } from "../models/Vehicle";
import { AbVehicleType } from "./AbVehicleType";

export class PremiumVehicle implements AbVehicleType  {
    vehicleType: VehicleType;
    vehicleSubType: VehicleSubType;
    constructor(vehicleType: VehicleType, vehicleSubType: VehicleSubType) {
        this.vehicleType = vehicleType;
        this.vehicleSubType = vehicleSubType;
    }
    getBaseCost(): number {
        if (this.vehicleSubType === VehicleSubType.SEDAN) {
            return 400;
        } else if (this.vehicleSubType === VehicleSubType.XL) {
            return 420;
        }
        return 350;
    }

    getDistanceMultiplier(): number {
        return 3;
    }
}
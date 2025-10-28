import { VehicleSubType, VehicleType } from "../models/Vehicle";
import { AbVehicleType } from "./AbVehicleType";

export class EconomyVehicle implements AbVehicleType  {

    vehicleType: VehicleType;
    vehicleSubType: VehicleSubType;
    constructor(vehicleType: VehicleType, vehicleSubType: VehicleSubType) {
        this.vehicleType = vehicleType;
        this.vehicleSubType = vehicleSubType;
    }
    getBaseCost(): number {
        if (this.vehicleType === VehicleType.MOTO) {
            return 30;
        } else if (this.vehicleType === VehicleType.AUTO) {
            return 50;
        }
        return 90;
    }

    getDistanceMultiplier(): number {
        return 1.5;
    }
}
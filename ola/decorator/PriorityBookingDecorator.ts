import { AbVehicleType } from "../factory/AbVehicleType";
import { VehicleType, VehicleSubType } from "../models/Vehicle";
import { VehicleAmenitiesDecorator } from "./VehicleAmenitiesDecorator";

export class PriorityBookingDecorator extends VehicleAmenitiesDecorator {
    vehicleType: VehicleType;
    vehicleSubType: VehicleSubType;
    baseVehicle: AbVehicleType;
    constructor(baseVehicle: AbVehicleType, vehicleType: VehicleType, vehicleSubType: VehicleSubType) {
        super();
        this.baseVehicle = baseVehicle;
        this.vehicleType = vehicleType;
        this.vehicleSubType = vehicleSubType;
    }
    getDistanceMultiplier(): number {
        return this.baseVehicle.getDistanceMultiplier();
    }
    getBaseCost(): number {
        return this.baseVehicle.getBaseCost() + 200;
    }
    
}
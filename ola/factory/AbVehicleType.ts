import { Vehicle, VehicleSubType, VehicleType } from "../models/Vehicle";

export abstract class AbVehicleType {
    abstract vehicleType: VehicleType;
    abstract vehicleSubType: VehicleSubType;

    abstract getDistanceMultiplier(): number;
    abstract getBaseCost(): number;
}
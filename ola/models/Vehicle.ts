import { BaseModel } from "./BaseModel";

export interface Vehicle extends BaseModel {
    licensePlate: string;
    model: string;
    image: string;
    driverId: string;
    vehicleType: VehicleType;
    vehicleSubType: VehicleSubType;
}


export enum VehicleType {
    CAR = "CAR",
    MOTO = "MOTO",
    AUTO = "AUTO",
}

export enum VehicleSubType {
    SEDAN = "SEDAN",
    ELECTRIC = "ELECTRIC",
    XL = "XL",
    GO = "GO"
}
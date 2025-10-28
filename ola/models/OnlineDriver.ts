import { BaseModel } from "./BaseModel";
import { Loc } from "./Trip";

// instance of a driver logging into the app with a vehicle
export interface OnlineDriver extends BaseModel {
    vehicle: {
        licensePlate: string;
        model: string;
        image: string;
        id: string;
    },
    driver: {
        id: string;
        firstName: string;
        lastName: string;
        rating: number;
        tripsCompleted: number;
    },
    location: Loc // keep getting updated using websockets
}
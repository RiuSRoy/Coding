import { BaseModel } from "./BaseModel";
import { Location } from "./Trip";

export interface Cab {
    loc?: Location;
    driverId: string;
    id: string   // number pate
}
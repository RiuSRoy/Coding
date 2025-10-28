import { Location } from "./Trip";

export interface TripMetadata {
    riderRating: number;
    driverRating?: number;
    src: Location;
    dest: Location;
}
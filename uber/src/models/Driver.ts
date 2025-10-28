import { Cab } from "./Cab";
import { User } from "./User";

export interface Driver extends User {
    rating: number,
    cab: Cab,
}
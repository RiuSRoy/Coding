import { BaseModel } from "./BaseModel";

export interface User extends BaseModel {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    rating: number;
    tripsCompleted: number;
}
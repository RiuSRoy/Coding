import { BaseModel } from "./BaseModel";

export interface Card extends BaseModel {
    name: string;
    description?: string;
    assignedUser?: number;
    listId: number;
}
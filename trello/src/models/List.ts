import { BaseModel } from "./BaseModel";

export interface List extends BaseModel {
    name: string;
    boardId: number;
    cards: number[]
}
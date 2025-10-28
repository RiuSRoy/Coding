import { BaseModel } from "./BaseModel";
import { List } from "./List";
import { User } from "./User";

export interface Board extends BaseModel {
    name: string,
    privacy: PrivacyType,
    url: string,
    lists: number[],
    members: Set<User>
}

export enum PrivacyType {
    "PUBLIC" = "PUBLIC",
    "PRIVATE" = "PRIVATE"
}
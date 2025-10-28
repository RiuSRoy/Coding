export interface BaseModel {
    id: string;
    isDeleted: boolean;
    createdAt?: number;
    updatedAt?: number;
    createdBy?: string;
    updatedBy?: string;
}
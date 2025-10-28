import { User } from "./User";

export interface Driver extends User {
    tripsCompleted: number;
    status: DriverStatus,
    driverLicense: string;
    driverLicenseExpiration?: number;
    driverLicenseState?: string;
    driverLicenseCountry?: string;
    driverLicenseImage?: string;
}

export enum DriverStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
}
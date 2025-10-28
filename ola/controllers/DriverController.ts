import { Driver, DriverStatus } from "../models/Driver";

class DriverController {

    private drivers: Record<string, Driver> = {};
    private driverCount: number = 0;

    registerDriver(firstName: string, lastName: string, phoneNumber: string, driverLicense: string) {
        const driver: Driver = {
            id: this.driverCount.toString(),
            firstName,
            lastName,
            phoneNumber,
            rating: 5,
            status: DriverStatus.INACTIVE,
            isDeleted: false,
            tripsCompleted: 0,
            driverLicense,
        }
        this.drivers[driver.id] = driver;
        console.log("Driver registered: ", driver.firstName, driver.lastName);
        this.driverCount++;
        return driver;
    }

    getDriverDetails(driverId: string) {
        return this.drivers[driverId];
    }

    updateDriverDetails(params: any, driverId: string) {
        if (!this.drivers[driverId] || this.drivers[driverId].isDeleted) {
            console.error("Driver not found!: ", driverId);
            return;
        }
        if (params.status && params.status === 'ACTIVE') {
            this.drivers[driverId].status = DriverStatus.ACTIVE;
        }
    }
}

export default new DriverController();
import { Driver, DriverStatus } from "../models/Driver";
import { OnlineDriver } from "../models/OnlineDriver";
import { Loc } from "../models/Trip";
import { Vehicle } from "../models/Vehicle";

class OnlineDriverController {

    private onlineDrivers: Record<string, OnlineDriver> = {};
    private onlineDriversIds: number = 0;

    driverComesOnline(driver: Driver, vehicle: Vehicle, loc: Loc): OnlineDriver | undefined { 
        if (driver.status !== DriverStatus.ACTIVE || driver.isDeleted) {
            console.log("Driver is not active or deleted");
            return undefined;
        }
        if (vehicle.driverId !== driver.id) {
            console.log("Vehicle does not belong to driver");
            return undefined;
        }
        const onlineDriver: OnlineDriver = {
            id: this.onlineDriversIds.toString(),
            vehicle: {
                licensePlate: vehicle.licensePlate,
                model: vehicle.model,
                image: vehicle.image,
                id: vehicle.id,
            },
            driver: {
                id: driver.id,
                firstName: driver.firstName,
                lastName: driver.lastName,
                rating: 0,
                tripsCompleted: 0
            },
            location: loc,
            isDeleted: false
        }
        this.onlineDrivers[onlineDriver.id] = onlineDriver;
        this.onlineDriversIds++;
        return onlineDriver;
    }

    driverGoesOffline(onlineDriver: OnlineDriver): void { 
        this.onlineDrivers[onlineDriver.id].isDeleted = true;
    }


    listOnlineDrivers() {
        return Object.values(this.onlineDrivers)
                    .filter(onlineDriver => !onlineDriver.isDeleted);
    }
}

export default new OnlineDriverController();
import { Driver } from "../models/Driver";

class DriverManager {

    drivers: Record<number, Driver> = {}


    addDriver(driver: Driver) {
        this.drivers[driver.id] = driver;
    }

    getDriver(driverId: number) {
        return this.drivers[driverId];
    }
}

export default new DriverManager();
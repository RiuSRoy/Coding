import { Vehicle, VehicleSubType, VehicleType } from "../models/Vehicle";
import DriverController from "./DriverController";

class VehicleController {

    vehicles: Record<string, Vehicle> = {};
    vehicleIdsCount: number = 0;

    getVehicleDetails(vehicleId: string) {
        return this.vehicles[vehicleId];
    }

    registerVehicle(licensePlate: string, model: string, driverId: string) {
        const vehicle: Vehicle = {
            id: this.vehicleIdsCount.toString(),
            licensePlate,
            model,
            image: "",
            driverId,
            vehicleType: model === 'swift desire' ? VehicleType.CAR : VehicleType.AUTO,
            vehicleSubType: model === 'swift desire' ? VehicleSubType.GO : VehicleSubType.XL,
            isDeleted: false
        }
        this.vehicles[vehicle.id] = vehicle;
        this.vehicleIdsCount++;
        DriverController.updateDriverDetails({ status: 'ACTIVE' }, driverId);
        return vehicle;
    }
}

export default new VehicleController();
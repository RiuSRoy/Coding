import { VehicleSubType, VehicleType } from "../models/Vehicle";
import { EconomyVehicle } from "./EconomyVehicle";
import { AbVehicleType } from "./AbVehicleType";
import { PremiumVehicle } from "./PremiumVehicle";

class VehicleTypeFactory {
    createVehicleType(vehicleType: VehicleType, vehicleSubType: VehicleSubType): AbVehicleType {
        if ([VehicleSubType.SEDAN, VehicleSubType.XL].includes(vehicleSubType)) {
            return new PremiumVehicle(vehicleType, vehicleSubType);
        }
        return new EconomyVehicle(vehicleType, vehicleSubType);
    }
}

export default new VehicleTypeFactory();
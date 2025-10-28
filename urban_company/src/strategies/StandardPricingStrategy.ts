import { Service } from "../models/Service";
import { IPricingStrategy } from "./IPricingStrategy";

export class StandardPricingStrategy implements IPricingStrategy {
    calculatePrice(service: Service): number {
        return service.basePrice;
    }
}

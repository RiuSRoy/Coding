import { Service } from "../models/Service";
import { IPricingStrategy } from "./IPricingStrategy";

export class DiscountPricingStrategy implements IPricingStrategy {
    constructor(private discountPercentage: number) {}

    calculatePrice(service: Service): number {
        const discount = (service.basePrice * this.discountPercentage) / 100;
        return service.basePrice - discount;
    }
}

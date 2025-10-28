import { Service } from "../models/Service";
import { IPricingStrategy } from "./IPricingStrategy";

export class PeakHourPricingStrategy implements IPricingStrategy {
    private peakMultiplier: number = 1.5;

    calculatePrice(service: Service, params?: { isPeakHour: boolean }): number {
        const basePrice = service.basePrice;
        if (params?.isPeakHour) {
            return basePrice * this.peakMultiplier;
        }
        return basePrice;
    }
}

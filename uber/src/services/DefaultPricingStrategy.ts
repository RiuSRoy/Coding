import { Trip } from "../models/Trip";
import { TripMetadata } from "../models/TripMetadata";
import { IPricingStrategy, PricingStrategyType } from "./IPricingStrategy";

export class DefaultPricingStrategy implements IPricingStrategy {


    calculatePrice(metadata: TripMetadata): number {
        return 55;
    }


    getPricingStrategyName(): PricingStrategyType {
        return PricingStrategyType.DEFAULT_PRICING_STRATEGY
    }

}
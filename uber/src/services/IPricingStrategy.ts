import { Trip } from "../models/Trip";
import { TripMetadata } from "../models/TripMetadata";

export interface IPricingStrategy {

    calculatePrice(metadata: TripMetadata): number;

    getPricingStrategyName(): PricingStrategyType
}


export enum PricingStrategyType {
    DEFAULT_PRICING_STRATEGY = "default",
    RATING_BASED_STRATEGY = "ratingBased",
}
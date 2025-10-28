import { ADD_ON_REQUEST, TripRequestData } from "../models/TripRequestData";
import { DefaultDriverMatchingStrategy } from "./DefaultDriverMatchingStrategy";
import { DefaultPriceStrategy } from "./DefaultPriceStrategy";
import { DistanceBasedPriceStrategy } from "./DistanceBasedPricingStrategy";
import { IPriceStrategy } from "./IPriceStrategy";

export class TripStrategyManager {
    
    tripReq: TripRequestData;
    constructor(trip: TripRequestData) {
        this.tripReq = trip;
    }
    public decidePriceCalculationStrategy(): IPriceStrategy {
        return new DistanceBasedPriceStrategy(this.tripReq);
    }


    public decideDriverMatchingStrategy() {
        return new DefaultDriverMatchingStrategy(this.tripReq);
    }
}

import { TripMetadata } from "../models/TripMetadata";
import { DefaultPricingStrategy } from "../services/DefaultPricingStrategy";
import { IDriverMatchingStrategy } from "../services/IDriverMatchingStrategy";
import { IPricingStrategy } from "../services/IPricingStrategy";
import { LeastTimeBasedDriverMatchingStrategy } from "../services/LeastTimeBasedDriverMatchingStrategy";

class SrategyManager {


    decidesPricingStrategy(metadata: TripMetadata): IPricingStrategy {
        return new DefaultPricingStrategy();
    }

    decidesDriverMatchingStrategy(metadata: TripMetadata): IDriverMatchingStrategy {
        return new LeastTimeBasedDriverMatchingStrategy();
    }
}

export default new SrategyManager();
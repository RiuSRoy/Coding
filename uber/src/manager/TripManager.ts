import { Rider } from "../models/Rider";
import { Location, Trip } from "../models/Trip";
import { TripMetadata } from "../models/TripMetadata";
import StrategyManager from "./StrategyManager";

class TripManager {

    createTrip(rider: Rider, src: Location, dest: Location) {

        const tripMetadata: TripMetadata = {
            riderRating: rider.rating,
            src,
            dest
        }
        const driverMatchingStrategy = StrategyManager.decidesDriverMatchingStrategy(tripMetadata);
        driverMatchingStrategy.matchDriver(tripMetadata);
        const trip: Trip = {
            price: 0,
            driverId: 0,
            riderId: 0,
            src: {
                lat: 0,
                lon: 0
            },
            dest: {
                lat: 0,
                lon: 0
            },
            status: "COMPLETED",
            pricingStrategy: "/Users/aishsroy/Documents/Coding/uber/src/services/IPricingStrategy".DEFAULT_PRICING_STRATEGY,
            id: 0
        }
    }
    

}

export default new TripManager();
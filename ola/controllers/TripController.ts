import { OnlineDriver } from "../models/OnlineDriver";
import { Trip, TripStatus } from "../models/Trip";
import { TripRequestData, TripRequestStatus } from "../models/TripRequestData";
import { TripStrategyManager } from "../strategy/TripStrategyManager";

class TripController {

    private trips: Record<string, Trip> = {}
    private tripIdsCount: number = 0

    calculatePriceForTrip(trip: TripRequestData) {
        const price = new TripStrategyManager(trip)
            .decidePriceCalculationStrategy()
            .calculatePrice();
        console.log("To Pay: ", price);
        return price;
    }

    findNearbyDriver(tripRequestData: TripRequestData, tripPrice: number) {
        const trip: Trip = {
            tripRequest: tripRequestData,
            status: TripStatus.REQUESTED,
            otp: (Math.floor(1000 + Math.random() * 9000)).toString(),
            id: this.tripIdsCount.toString(),
            isDeleted: false,
            price: tripPrice,
        }
        this.trips[this.tripIdsCount.toString()] = trip;
        this.tripIdsCount++;

        // searching for online driver nearby will take time
        const onlineDriver = new TripStrategyManager(tripRequestData)
            .decideDriverMatchingStrategy()
            .matchDriver();
        if (!onlineDriver) {
            console.error("No driver found for the trip request!");
            return null;
        }

        if (this.trips[trip.id].status !== TripStatus.REQUESTED) {
            console.error("Trip request is either cancelled or accepted by another driver!");
            return null;
        }
        // send notification to Driver
        console.log("Notification to driver ", onlineDriver.driver.firstName, trip);
        return {trip, onlineDriver};
    }

    acceptTripRequest(trip: Trip, onlineDriver: OnlineDriver) {
        trip.status = TripStatus.ACCEPTED;
        trip.vehicleId = onlineDriver.vehicle.id;
        trip.liveLoc = onlineDriver.location;
        trip.driver = onlineDriver;
        this.trips[trip.id] = trip;
        console.log("Trip accepted: ", trip);
    }

    cancelTrip(trip: Trip, cancelledBy: 'USER'|'DRIVER') {
        trip.status = TripStatus.CANCELLED;
        this.trips[trip.id] = trip;
    }

    shareOtpAndStartTrip(otp: string, trip: Trip) {
        if (trip.otp !== otp) {
            console.error("Wrong OTP: ", otp);
            return;
        }
        trip.status === TripStatus.STARTED;
        this.trips[trip.id] = trip;
    }
}

export default new TripController();

import { Rider } from "../models/Rider";

class RiderManager {

    riders: Record<number, Rider> = {}
    addRider(rider: Rider) {
        this.riders[rider.id] = rider
    }

    getRider(riderId: number) {
        this.riders[riderId]
    }
}

export default new RiderManager();
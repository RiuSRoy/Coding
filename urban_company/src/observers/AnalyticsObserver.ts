import { Booking } from "../models/Booking";
import { BookingEvent, IBookingObserver } from "./IBookingObserver";

export class AnalyticsObserver implements IBookingObserver {
    private eventCounts: Map<BookingEvent, number> = new Map();

    update(booking: Booking, event: BookingEvent): void {
        const count = this.eventCounts.get(event) || 0;
        this.eventCounts.set(event, count + 1);
        console.log(`[ANALYTICS] Event ${event} triggered. Total count: ${count + 1}`);
    }

    getStats(): Map<BookingEvent, number> {
        return this.eventCounts;
    }
}

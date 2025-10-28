import { Booking } from "../models/Booking";
import { BookingEvent, IBookingObserver } from "./IBookingObserver";

export class LoggingObserver implements IBookingObserver {
    update(booking: Booking, event: BookingEvent): void {
        const timestamp = new Date().toISOString();
        console.log(`[LOG ${timestamp}] Booking #${booking.id} state changed to ${event}`);
        console.log(`  Details: Service ${booking.serviceId}, Customer ${booking.customerId}`);
    }
}

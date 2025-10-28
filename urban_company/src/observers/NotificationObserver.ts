import { Booking } from "../models/Booking";
import { BookingEvent, IBookingObserver } from "./IBookingObserver";

export class NotificationObserver implements IBookingObserver {
    update(booking: Booking, event: BookingEvent): void {
        console.log(`[NOTIFICATION] Booking #${booking.id} - ${event}`);

        switch (event) {
            case BookingEvent.CREATED:
                console.log(`  -> Sending confirmation to customer ID: ${booking.customerId}`);
                break;
            case BookingEvent.ASSIGNED:
                console.log(`  -> Notifying technician ID: ${booking.technicianId}`);
                break;
            case BookingEvent.COMPLETED:
                console.log(`  -> Requesting feedback from customer ID: ${booking.customerId}`);
                break;
            case BookingEvent.CANCELLED:
                console.log(`  -> Sending cancellation notice`);
                break;
        }
    }
}

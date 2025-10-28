// Observer Pattern - Interface for booking observers
import { Booking } from "../models/Booking";

export interface IBookingObserver {
    update(booking: Booking, event: BookingEvent): void;
}

export enum BookingEvent {
    CREATED = "CREATED",
    CONFIRMED = "CONFIRMED",
    ASSIGNED = "ASSIGNED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

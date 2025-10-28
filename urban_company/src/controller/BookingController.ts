import { Booking } from "../models/Booking";
import { BookingRepository } from "../repositories/BookingRepository";
import { IBookingObserver } from "../observers/IBookingObserver";
import { NotificationObserver } from "../observers/NotificationObserver";
import { LoggingObserver } from "../observers/LoggingObserver";
import { AnalyticsObserver } from "../observers/AnalyticsObserver";

class BookingController {
    private bookingRepository: BookingRepository;
    private observers: IBookingObserver[];

    constructor() {
        this.bookingRepository = new BookingRepository();
        // Initialize default observers
        this.observers = [
            new NotificationObserver(),
            new LoggingObserver(),
            new AnalyticsObserver()
        ];
    }

    createBooking(serviceId: number, customerId: number, scheduledAt: Date, totalPrice: number, address: string): Booking {
        const booking = new Booking(serviceId, customerId, scheduledAt, totalPrice, address);

        // Attach observers
        this.observers.forEach(observer => booking.addObserver(observer));

        // Save booking
        return this.bookingRepository.save(booking);
    }

    confirmBooking(bookingId: number): void {
        const booking = this.bookingRepository.findById(bookingId);
        if (!booking) {
            throw new Error(`Booking #${bookingId} not found`);
        }
        booking.confirm();
    }

    assignTechnician(bookingId: number, technicianId: number): void {
        const booking = this.bookingRepository.findById(bookingId);
        if (!booking) {
            throw new Error(`Booking #${bookingId} not found`);
        }
        booking.assign(technicianId);
    }

    startService(bookingId: number): void {
        const booking = this.bookingRepository.findById(bookingId);
        if (!booking) {
            throw new Error(`Booking #${bookingId} not found`);
        }
        booking.startService();
    }

    completeBooking(bookingId: number): void {
        const booking = this.bookingRepository.findById(bookingId);
        if (!booking) {
            throw new Error(`Booking #${bookingId} not found`);
        }
        booking.complete();
    }

    cancelBooking(bookingId: number): void {
        const booking = this.bookingRepository.findById(bookingId);
        if (!booking) {
            throw new Error(`Booking #${bookingId} not found`);
        }
        booking.cancel();
    }

    getBookingById(bookingId: number): Booking | undefined {
        return this.bookingRepository.findById(bookingId);
    }

    getAllBookings(): Booking[] {
        return this.bookingRepository.findAll();
    }

    getCustomerBookings(customerId: number): Booking[] {
        return this.bookingRepository.findByCustomerId(customerId);
    }

    getTechnicianBookings(technicianId: number): Booking[] {
        return this.bookingRepository.findByTechnicianId(technicianId);
    }

    addObserver(observer: IBookingObserver): void {
        this.observers.push(observer);
    }
}

export default new BookingController();

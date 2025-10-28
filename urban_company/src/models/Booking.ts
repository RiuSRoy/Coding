// Booking model with Observer Pattern integration
import { IBookingObserver, BookingEvent } from "../observers/IBookingObserver";

export enum BookingStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    ASSIGNED = "ASSIGNED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export class Booking {
    id?: number;
    serviceId: number;
    customerId: number;
    technicianId?: number;
    scheduledAt: Date;
    completedAt?: Date;
    totalPrice: number;
    address: string;
    status: BookingStatus;

    private observers: IBookingObserver[] = [];

    constructor(serviceId: number, customerId: number, scheduledAt: Date, totalPrice: number, address: string) {
        this.serviceId = serviceId;
        this.customerId = customerId;
        this.scheduledAt = scheduledAt;
        this.totalPrice = totalPrice;
        this.address = address;
        this.status = BookingStatus.PENDING;
    }

    // Observer Pattern methods
    addObserver(observer: IBookingObserver): void {
        this.observers.push(observer);
    }

    removeObserver(observer: IBookingObserver): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    private notifyObservers(event: BookingEvent): void {
        this.observers.forEach(observer => observer.update(this, event));
    }

    private updateStatus(newStatus: BookingStatus, event: BookingEvent): void {
        this.status = newStatus;
        this.notifyObservers(event);
    }

    getStatus(): BookingStatus {
        return this.status;
    }

    confirm(): void {
        if (this.status !== BookingStatus.PENDING) {
            throw new Error(`Cannot confirm booking in ${this.status} status`);
        }
        console.log(`Confirming booking #${this.id}`);
        this.updateStatus(BookingStatus.CONFIRMED, BookingEvent.CONFIRMED);
    }

    assign(technicianId: number): void {
        if (this.status !== BookingStatus.CONFIRMED && this.status !== BookingStatus.ASSIGNED) {
            throw new Error(`Cannot assign technician to booking in ${this.status} status`);
        }
        console.log(`Assigning technician ${technicianId} to booking #${this.id}`);
        this.technicianId = technicianId;
        this.updateStatus(BookingStatus.ASSIGNED, BookingEvent.ASSIGNED);
    }

    startService(): void {
        if (this.status !== BookingStatus.ASSIGNED) {
            throw new Error(`Cannot start service for booking in ${this.status} status`);
        }
        console.log(`Starting service for booking #${this.id}`);
        this.updateStatus(BookingStatus.IN_PROGRESS, BookingEvent.IN_PROGRESS);
    }

    complete(): void {
        if (this.status !== BookingStatus.IN_PROGRESS) {
            throw new Error(`Cannot complete booking in ${this.status} status`);
        }
        console.log(`Completing service for booking #${this.id}`);
        this.completedAt = new Date();
        this.updateStatus(BookingStatus.COMPLETED, BookingEvent.COMPLETED);
    }

    cancel(): void {
        if (this.status === BookingStatus.COMPLETED || this.status === BookingStatus.CANCELLED) {
            throw new Error(`Cannot cancel booking in ${this.status} status`);
        }
        console.log(`Cancelling booking #${this.id}`);
        this.updateStatus(BookingStatus.CANCELLED, BookingEvent.CANCELLED);
    }
}
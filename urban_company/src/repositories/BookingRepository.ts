import { Booking } from "../models/Booking";
import { IRepository } from "./IRepository";

export class BookingRepository implements IRepository<Booking> {
    private bookings: Map<number, Booking> = new Map();
    private currentId: number = 1;

    save(entity: Booking): Booking {
        if (!entity.id) {
            entity.id = this.currentId++;
        }
        this.bookings.set(entity.id, entity);
        return entity;
    }

    findById(id: number): Booking | undefined {
        return this.bookings.get(id);
    }

    findAll(): Booking[] {
        return Array.from(this.bookings.values());
    }

    findByCustomerId(customerId: number): Booking[] {
        return Array.from(this.bookings.values()).filter(b => b.customerId === customerId);
    }

    findByTechnicianId(technicianId: number): Booking[] {
        return Array.from(this.bookings.values()).filter(b => b.technicianId === technicianId);
    }

    update(id: number, entity: Booking): Booking | undefined {
        if (this.bookings.has(id)) {
            entity.id = id;
            this.bookings.set(id, entity);
            return entity;
        }
        return undefined;
    }

    delete(id: number): boolean {
        return this.bookings.delete(id);
    }
}

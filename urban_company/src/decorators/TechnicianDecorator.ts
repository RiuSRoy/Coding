// Decorator Pattern - Base decorator for technicians
import { Technician } from "../models/Technician";

export abstract class TechnicianDecorator extends Technician {
    protected technician: Technician;

    constructor(technician: Technician) {
        super(technician.name, technician.email, technician.phone, technician.specialization);
        this.technician = technician;
        this.id = technician.id;
        this.rating = technician.rating;
        this.isAvailable = technician.isAvailable;
    }

    abstract getDescription(): string;
    abstract getHourlyRate(): number;
}

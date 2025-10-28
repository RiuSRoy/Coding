import { Technician } from "../models/Technician";
import { TechnicianDecorator } from "./TechnicianDecorator";

export class PremiumTechnicianDecorator extends TechnicianDecorator {
    constructor(technician: Technician) {
        super(technician);
    }

    getDescription(): string {
        return `${this.technician.getDescription()} ⭐ PREMIUM`;
    }

    getHourlyRate(): number {
        return this.technician.getHourlyRate() * 1.5; // 50% premium
    }
}

import { Technician } from "../models/Technician";
import { TechnicianDecorator } from "./TechnicianDecorator";

export class ExperiencedTechnicianDecorator extends TechnicianDecorator {
    private yearsOfExperience: number;

    constructor(technician: Technician, yearsOfExperience: number) {
        super(technician);
        this.yearsOfExperience = yearsOfExperience;
    }

    getDescription(): string {
        return `${this.technician.getDescription()} [${this.yearsOfExperience} years experience]`;
    }

    getHourlyRate(): number {
        const experienceBonus = this.yearsOfExperience * 50;
        return this.technician.getHourlyRate() + experienceBonus;
    }
}

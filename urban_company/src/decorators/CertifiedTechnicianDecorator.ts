import { Technician } from "../models/Technician";
import { TechnicianDecorator } from "./TechnicianDecorator";

export class CertifiedTechnicianDecorator extends TechnicianDecorator {
    private certifications: string[];

    constructor(technician: Technician, certifications: string[]) {
        super(technician);
        this.certifications = certifications;
    }

    getDescription(): string {
        const certs = this.certifications.join(", ");
        return `${this.technician.getDescription()} [Certified: ${certs}]`;
    }

    getHourlyRate(): number {
        return this.technician.getHourlyRate() + 200; // Premium for certification
    }
}

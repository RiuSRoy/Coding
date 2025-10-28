import { Technician } from "../models/Technician";
import { TechnicianRepository } from "../repositories/TechnicianRepository";
import { CertifiedTechnicianDecorator } from "../decorators/CertifiedTechnicianDecorator";
import { ExperiencedTechnicianDecorator } from "../decorators/ExperiencedTechnicianDecorator";
import { PremiumTechnicianDecorator } from "../decorators/PremiumTechnicianDecorator";

class TechnicianController {
    private technicianRepository: TechnicianRepository;

    constructor() {
        this.technicianRepository = new TechnicianRepository();
    }

    addTechnician(name: string, email: string, phone: string, specialization: string): Technician {
        const technician = new Technician(name, email, phone, specialization);
        return this.technicianRepository.save(technician);
    }

    getTechnicianById(id: number): Technician | undefined {
        return this.technicianRepository.findById(id);
    }

    getAllTechnicians(): Technician[] {
        return this.technicianRepository.findAll();
    }

    getAvailableTechnicians(): Technician[] {
        return this.technicianRepository.findAvailable();
    }

    getTechniciansBySpecialization(specialization: string): Technician[] {
        return this.technicianRepository.findBySpecialization(specialization);
    }

    setTechnicianAvailability(id: number, isAvailable: boolean): void {
        const technician = this.technicianRepository.findById(id);
        if (!technician) {
            throw new Error(`Technician #${id} not found`);
        }
        technician.isAvailable = isAvailable;
        this.technicianRepository.update(id, technician);
    }

    // Decorator pattern methods
    addCertification(technician: Technician, certifications: string[]): Technician {
        return new CertifiedTechnicianDecorator(technician, certifications);
    }

    addExperience(technician: Technician, years: number): Technician {
        return new ExperiencedTechnicianDecorator(technician, years);
    }

    makePremium(technician: Technician): Technician {
        return new PremiumTechnicianDecorator(technician);
    }
}

export default new TechnicianController();

import { Technician } from "../models/Technician";
import { IRepository } from "./IRepository";

export class TechnicianRepository implements IRepository<Technician> {
    private technicians: Map<number, Technician> = new Map();
    private currentId: number = 1;

    save(entity: Technician): Technician {
        if (!entity.id) {
            entity.id = this.currentId++;
        }
        this.technicians.set(entity.id, entity);
        return entity;
    }

    findById(id: number): Technician | undefined {
        return this.technicians.get(id);
    }

    findAll(): Technician[] {
        return Array.from(this.technicians.values());
    }

    findAvailable(): Technician[] {
        return Array.from(this.technicians.values()).filter(t => t.isAvailable);
    }

    findBySpecialization(specialization: string): Technician[] {
        return Array.from(this.technicians.values()).filter(t => t.specialization === specialization);
    }

    update(id: number, entity: Technician): Technician | undefined {
        if (this.technicians.has(id)) {
            entity.id = id;
            this.technicians.set(id, entity);
            return entity;
        }
        return undefined;
    }

    delete(id: number): boolean {
        return this.technicians.delete(id);
    }
}

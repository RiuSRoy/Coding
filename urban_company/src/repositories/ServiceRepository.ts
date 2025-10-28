// Repository Pattern - Concrete implementation for Service storage
import { Service } from "../models/Service";
import { IRepository } from "./IRepository";

export class ServiceRepository implements IRepository<Service> {
    private services: Map<number, Service> = new Map();
    private currentId: number = 1;

    save(entity: Service): Service {
        if (!entity.id) {
            entity.id = this.currentId++;
        }
        this.services.set(entity.id, entity);
        return entity;
    }

    findById(id: number): Service | undefined {
        return this.services.get(id);
    }

    findAll(): Service[] {
        return Array.from(this.services.values());
    }

    findByCategory(category: string): Service[] {
        return Array.from(this.services.values()).filter(s => s.category === category);
    }

    findByParentId(parentId: number): Service[] {
        return Array.from(this.services.values()).filter(s => s.parentServiceId === parentId);
    }

    update(id: number, entity: Service): Service | undefined {
        if (this.services.has(id)) {
            entity.id = id;
            this.services.set(id, entity);
            return entity;
        }
        return undefined;
    }

    delete(id: number): boolean {
        return this.services.delete(id);
    }
}

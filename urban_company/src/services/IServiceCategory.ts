import { Service } from "../models/Service";
import { ServiceRepository } from "../repositories/ServiceRepository";

export abstract class IServiceCategory {
    protected repository: ServiceRepository;

    constructor(repository: ServiceRepository) {
        this.repository = repository;
    }

    // Create a non-bookable category (e.g., "SALON", "WOMENS")
    abstract createCategory(title: string, description: string, parentServiceId?: number): Service;

    // Create a bookable service (e.g., "O3 Hydra Facial")
    abstract createBookableService(title: string, description: string, duration: number, basePrice: number, parentServiceId: number): Service;

    getAllServices(): Service[] {
        return this.repository.findAll();
    }

    getServicesByCategory(): Service[] {
        return this.repository.findByCategory(this.getCategoryName());
    }

    getChildServices(parentId: number): Service[] {
        return this.repository.findByParentId(parentId);
    }

    getServiceHierarchy(serviceId: number): Service[] {
        const hierarchy: Service[] = [];
        let service = this.repository.findById(serviceId);

        while (service) {
            hierarchy.unshift(service);
            if (service.parentServiceId) {
                service = this.repository.findById(service.parentServiceId);
            } else {
                break;
            }
        }

        return hierarchy;
    }

    getRootCategories(): Service[] {
        return this.repository.findByCategory(this.getCategoryName()).filter(s => !s.parentServiceId || s.parentServiceId === 0);
    }

    protected abstract getCategoryName(): string;
}
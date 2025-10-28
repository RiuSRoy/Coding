import { CleaningService, ServiceCategory, ServiceBuilder } from "../models/Service";
import { IServiceCategory } from "./IServiceCategory";
import { ServiceRepository } from "../repositories/ServiceRepository";

export class CleaningServiceCategory extends IServiceCategory {

    constructor(repository: ServiceRepository) {
        super(repository);
    }

    protected getCategoryName(): string {
        return ServiceCategory.CLEANING;
    }

    createCategory(title: string, description: string, parentServiceId?: number): CleaningService {
        const service = new ServiceBuilder()
            .setTitle(title)
            .setDescription(description)
            .setCategory(ServiceCategory.CLEANING)
            .setBookable(false)
            .setBasePrice(0)
            .setParentServiceId(parentServiceId || 0)
            .build() as CleaningService;

        return this.repository.save(service) as CleaningService;
    }

    createBookableService(title: string, description: string, duration: number, basePrice: number, parentServiceId: number): CleaningService {
        const service = new ServiceBuilder()
            .setTitle(title)
            .setDescription(description)
            .setCategory(ServiceCategory.CLEANING)
            .setDuration(duration)
            .setBasePrice(basePrice)
            .setBookable(true)
            .setParentServiceId(parentServiceId)
            .build() as CleaningService;

        return this.repository.save(service) as CleaningService;
    }
}
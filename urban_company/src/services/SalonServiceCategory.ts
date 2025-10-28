import { SalonService, ServiceCategory, ServiceBuilder } from "../models/Service";
import { IServiceCategory } from "./IServiceCategory";
import { ServiceRepository } from "../repositories/ServiceRepository";

export class SalonServiceCategory extends IServiceCategory {

    constructor(repository: ServiceRepository) {
        super(repository);
    }

    protected getCategoryName(): string {
        return ServiceCategory.SALON;
    }

    createCategory(title: string, description: string, parentServiceId?: number): SalonService {
        const service = new ServiceBuilder()
            .setTitle(title)
            .setDescription(description)
            .setCategory(ServiceCategory.SALON)
            .setBookable(false)
            .setBasePrice(0)
            .setParentServiceId(parentServiceId || 0)
            .build() as SalonService;

        return this.repository.save(service) as SalonService;
    }

    createBookableService(title: string, description: string, duration: number, basePrice: number, parentServiceId: number): SalonService {
        const service = new ServiceBuilder()
            .setTitle(title)
            .setDescription(description)
            .setCategory(ServiceCategory.SALON)
            .setDuration(duration)
            .setBasePrice(basePrice)
            .setBookable(true)
            .setParentServiceId(parentServiceId)
            .build() as SalonService;

        return this.repository.save(service) as SalonService;
    }
}
// Factory Pattern with Singleton - Creates and manages service category instances
import { ServiceCategory } from "../models/Service";
import { CleaningServiceCategory } from "./CleaningServiceCategory";
import { SalonServiceCategory } from "./SalonServiceCategory";
import { IServiceCategory } from "./IServiceCategory";
import { ServiceRepository } from "../repositories/ServiceRepository";

class ServiceCategoryFactory {
    private static instance: ServiceCategoryFactory;
    private categoryInstances: Map<ServiceCategory, IServiceCategory> = new Map();
    private serviceRepository: ServiceRepository;

    private constructor() {
        this.serviceRepository = new ServiceRepository();
    }

    // Singleton pattern
    public static getInstance(): ServiceCategoryFactory {
        if (!ServiceCategoryFactory.instance) {
            ServiceCategoryFactory.instance = new ServiceCategoryFactory();
        }
        return ServiceCategoryFactory.instance;
    }

    // Factory method with caching
    getServiceCatInstance(serviceType: ServiceCategory): IServiceCategory {
        if (!this.categoryInstances.has(serviceType)) {
            let instance: IServiceCategory;

            switch (serviceType) {
                case ServiceCategory.CLEANING:
                    instance = new CleaningServiceCategory(this.serviceRepository);
                    break;
                case ServiceCategory.SALON:
                    instance = new SalonServiceCategory(this.serviceRepository);
                    break;
                default:
                    throw new Error(`Unsupported service category: ${serviceType}`);
            }

            this.categoryInstances.set(serviceType, instance);
        }

        return this.categoryInstances.get(serviceType)!;
    }

    getRepository(): ServiceRepository {
        return this.serviceRepository;
    }
}

export default ServiceCategoryFactory.getInstance();
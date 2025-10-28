import { Service, ServiceCategory } from "../models/Service";
import ServiceCategoryFactory from "../services/ServiceCategoryFactory";
import { IPricingStrategy } from "../strategies/IPricingStrategy";
import { StandardPricingStrategy } from "../strategies/StandardPricingStrategy";

class ServiceController {
    private pricingStrategy: IPricingStrategy;

    constructor() {
        this.pricingStrategy = new StandardPricingStrategy();
    }

    setPricingStrategy(strategy: IPricingStrategy): void {
        this.pricingStrategy = strategy;
    }

    // Create a non-bookable category (e.g., "Women's Services", "Facial")
    createCategory(serviceType: ServiceCategory, title: string, description: string, parentServiceId?: number): Service {
        const serviceInstance = ServiceCategoryFactory.getServiceCatInstance(serviceType);
        return serviceInstance.createCategory(title, description, parentServiceId);
    }

    // Create a bookable service (must have a parent category)
    createBookableService(serviceType: ServiceCategory, title: string, description: string, duration: number, basePrice: number, parentServiceId: number): Service {
        const serviceInstance = ServiceCategoryFactory.getServiceCatInstance(serviceType);
        return serviceInstance.createBookableService(title, description, duration, basePrice, parentServiceId);
    }

    getAllServices(serviceType?: ServiceCategory): Service[] {
        if (serviceType) {
            const serviceInstance = ServiceCategoryFactory.getServiceCatInstance(serviceType);
            return serviceInstance.getServicesByCategory();
        }
        return ServiceCategoryFactory.getRepository().findAll();
    }

    getServiceById(id: number): Service | undefined {
        return ServiceCategoryFactory.getRepository().findById(id);
    }

    getChildServices(parentId: number, serviceType: ServiceCategory): Service[] {
        const serviceInstance = ServiceCategoryFactory.getServiceCatInstance(serviceType);
        return serviceInstance.getChildServices(parentId);
    }

    getServiceHierarchy(serviceId: number, serviceType: ServiceCategory): Service[] {
        const serviceInstance = ServiceCategoryFactory.getServiceCatInstance(serviceType);
        return serviceInstance.getServiceHierarchy(serviceId);
    }

    getRootCategories(serviceType: ServiceCategory): Service[] {
        const serviceInstance = ServiceCategoryFactory.getServiceCatInstance(serviceType);
        return serviceInstance.getRootCategories();
    }

    displayServiceTree(serviceType: ServiceCategory): void {
        const serviceInstance = ServiceCategoryFactory.getServiceCatInstance(serviceType);
        const rootServices = serviceInstance.getRootCategories();

        console.log(`\n${serviceType} Service Hierarchy:`);
        console.log("=".repeat(60));

        rootServices.forEach(root => {
            this.printServiceTree(root, serviceInstance, 0);
        });
    }

    // Get all services (categories + bookable) under a specific parent
    getAllServicesUnder(parentServiceId: number, serviceType: ServiceCategory): Service[] {
        const serviceInstance = ServiceCategoryFactory.getServiceCatInstance(serviceType);
        const result: Service[] = [];

        const collectServices = (parentId: number) => {
            const children = serviceInstance.getChildServices(parentId);
            children.forEach(child => {
                result.push(child);
                // Recursively get children of this child
                collectServices(child.id!);
            });
        };

        collectServices(parentServiceId);
        return result;
    }

    // Display service tree under a specific parent
    displayServicesUnder(parentServiceId: number, serviceType: ServiceCategory): void {
        const parent = this.getServiceById(parentServiceId);
        if (!parent) {
            console.log(`Service with ID ${parentServiceId} not found`);
            return;
        }

        const serviceInstance = ServiceCategoryFactory.getServiceCatInstance(serviceType);

        console.log(`\n📂 Services under "${parent.title}":`);
        console.log("=".repeat(60));

        this.printServiceTree(parent, serviceInstance, 0);
    }

    // Get only bookable services under a parent (useful for user browsing)
    getBookableServicesUnder(parentServiceId: number, serviceType: ServiceCategory): Service[] {
        return this.getAllServicesUnder(parentServiceId, serviceType).filter(s => s.isBookable);
    }

    private printServiceTree(service: Service, serviceInstance: any, level: number): void {
        const indent = "  ".repeat(level);
        const icon = service.isBookable ? "📦" : "📁";
        const priceInfo = service.isBookable ? ` - ₹${service.basePrice} (${service.duration}min)` : "";

        console.log(`${indent}${icon} ${service.title}${priceInfo}`);

        const children = serviceInstance.getChildServices(service.id!);
        children.forEach((child: Service) => {
            this.printServiceTree(child, serviceInstance, level + 1);
        });
    }

    calculateServicePrice(service: Service, additionalParams?: any): number {
        return this.pricingStrategy.calculatePrice(service, additionalParams);
    }
}

export default new ServiceController();
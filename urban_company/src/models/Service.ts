export interface Service {
    id?: number;
    title: string;
    description: string;
    isBookable: boolean;
    imgUrl?: string;
    duration?: number;   // in minutes
    isAddOn?: boolean;
    parentServiceId?: number;
    category: ServiceCategory;
    basePrice: number;
}

export interface CleaningService extends Service {
    category: ServiceCategory.CLEANING;
}

export interface SalonService extends Service {
    category: ServiceCategory.SALON;
}

export enum ServiceCategory {
    CLEANING = "Cleaning",
    SALON = "Salon",
    REPAIR = "Appliance Repair",
}

// Builder Pattern for Service creation
export class ServiceBuilder {
    private service: Partial<Service> = {
        isBookable: true,
        basePrice: 0
    };

    setTitle(title: string): ServiceBuilder {
        this.service.title = title;
        return this;
    }

    setDescription(description: string): ServiceBuilder {
        this.service.description = description;
        return this;
    }

    setCategory(category: ServiceCategory): ServiceBuilder {
        this.service.category = category;
        return this;
    }

    setDuration(duration: number): ServiceBuilder {
        this.service.duration = duration;
        return this;
    }

    setBasePrice(price: number): ServiceBuilder {
        this.service.basePrice = price;
        return this;
    }

    setBookable(isBookable: boolean): ServiceBuilder {
        this.service.isBookable = isBookable;
        return this;
    }

    setParentServiceId(parentId: number): ServiceBuilder {
        this.service.parentServiceId = parentId;
        return this;
    }

    setImgUrl(url: string): ServiceBuilder {
        this.service.imgUrl = url;
        return this;
    }

    setAddOn(isAddOn: boolean): ServiceBuilder {
        this.service.isAddOn = isAddOn;
        return this;
    }

    build(): Service {
        if (!this.service.title || !this.service.description || !this.service.category) {
            throw new Error("Service must have title, description, and category");
        }
        return this.service as Service;
    }
}
// Strategy Pattern - Different pricing strategies
import { Service } from "../models/Service";

export interface IPricingStrategy {
    calculatePrice(service: Service, additionalParams?: any): number;
}

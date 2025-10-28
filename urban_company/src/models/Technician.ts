// Base Technician model
export class Technician {
    id?: number;
    name: string;
    email: string;
    phone: string;
    specialization: string;
    rating: number;
    isAvailable: boolean;

    constructor(name: string, email: string, phone: string, specialization: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.specialization = specialization;
        this.rating = 5.0;
        this.isAvailable = true;
    }

    getDescription(): string {
        return `${this.name} - ${this.specialization} (Rating: ${this.rating})`;
    }

    getHourlyRate(): number {
        return 500; // Base rate
    }
}

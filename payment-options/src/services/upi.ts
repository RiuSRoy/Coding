import { IPayment } from './IPayment';

export class UPI implements IPayment {
    debit(): void {
        console.log("Paying using UPI...")
    }    
}
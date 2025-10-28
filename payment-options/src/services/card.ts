import { IPayment } from './IPayment';

export class Card implements IPayment {
    debit(): void {
        console.log("Paying using card...")
    }


}
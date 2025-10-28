import { IPayment, PaymentType } from './IPayment';
import { Card } from './card';
import { UPI } from './upi';

export class PaymentFactory {

    static getPaymentMethod(paymentType: PaymentType): IPayment {
        if (paymentType == PaymentType.CARD) {
            return new Card()
        }
        return new UPI()
    }
}


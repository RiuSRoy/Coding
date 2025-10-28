export interface IPayment {
    debit(): void;
}

export enum PaymentType {
    CARD = "CARD",
    UPI = "UPI"
}
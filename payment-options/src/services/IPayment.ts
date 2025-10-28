interface IPayment {
    debit(): void;
}

enum PaymentType {
    CARD = "CARD",
    UPI = "UPI"
}
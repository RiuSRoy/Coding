class PaymentFactory {

    static getPaymentMethod(paymentType: PaymentType): IPayment {
        if (paymentType == PaymentType.CARD) {
            return new Card()
        }
        return new UPI()
    }
}


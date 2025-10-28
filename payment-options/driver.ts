import { PaymentFactory } from './src/services/payment-factory';
import { PaymentType } from './src/services/IPayment';

const paymentClient = PaymentFactory.getPaymentMethod(PaymentType.CARD);

paymentClient.debit();


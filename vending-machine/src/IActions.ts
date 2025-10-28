import { VendingMachine } from "./VendingMachine";

export interface Actions {

    clickOnInsertCoinButton(vendingMachine: VendingMachine): void;

    acceptCoins(vendingMachine: VendingMachine, coin: number): void;

    clickOnProductButton(vendingMachine: VendingMachine): void;

    chooseProduct(vendingMachine: VendingMachine, codeNumber: string): void;

    refundAmountAndAbortButton(vendingMachine: VendingMachine): void;
}
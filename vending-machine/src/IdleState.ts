import { Actions } from "./IActions";
import { VENDING_MACHINE_STATE, VendingMachine } from "./VendingMachine";

export class IdleState implements Actions {
    clickOnInsertCoinButton(vendingMachine: VendingMachine): void {
        vendingMachine.updateState(VENDING_MACHINE_STATE.ACCEPTING_COINS);
    }
    acceptCoins(vendingMachine: VendingMachine, coin: number): void {
        throw new Error("Method not implemented.");
    }
    clickOnProductButton(vendingMachine: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    chooseProduct(vendingMachine: VendingMachine, codeNumber: string): void {
        throw new Error("Method not implemented.");
    }
    refundAmountAndAbortButton(vendingMachine: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
}
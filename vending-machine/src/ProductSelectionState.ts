import { Actions } from "./IActions";
import { VENDING_MACHINE_STATE, VendingMachine } from "./VendingMachine";

export class ProductSelectionState implements Actions {
    clickOnInsertCoinButton(vendingMachine: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    acceptCoins(vendingMachine: VendingMachine, coin: number): void {
        throw new Error("Method not implemented.");
    }
    clickOnProductButton(vendingMachine: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    chooseProduct(vendingMachine: VendingMachine, codeNumber: string): void {
        vendingMachine.updateInventory(codeNumber);
    }
    refundAmountAndAbortButton(vendingMachine: VendingMachine): void {
        const refund = vendingMachine.getBalance();
        console.log(`Refunding amount ${refund} back to the user`);
        vendingMachine.addCoins(-refund);
        vendingMachine.updateState(VENDING_MACHINE_STATE.IDLE);
    }
}
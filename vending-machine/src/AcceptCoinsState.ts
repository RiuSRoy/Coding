import { Actions } from "./IActions";
import { VENDING_MACHINE_STATE, VendingMachine } from "./VendingMachine";

export class AcceptCoinsState implements Actions {
    clickOnInsertCoinButton(vendingMachine: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    acceptCoins(vendingMachine: VendingMachine, coin: number): void {
        vendingMachine.addCoins(coin);
    }
    clickOnProductButton(vendingMachine: VendingMachine): void {
        vendingMachine.updateState(VENDING_MACHINE_STATE.PRODUCT_SELECTION);
    }
    chooseProduct(vendingMachine: VendingMachine, codeNumber: string): void {
        throw new Error("Method not implemented.");
    }
    refundAmountAndAbortButton(vendingMachine: VendingMachine): void {
        const refund = vendingMachine.getBalance();
        console.log(`Refunding amount ${refund} back to the user`);
        vendingMachine.addCoins(-refund);
        vendingMachine.updateState(VENDING_MACHINE_STATE.IDLE);
    }
    
}
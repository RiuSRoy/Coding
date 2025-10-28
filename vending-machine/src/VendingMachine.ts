
export class VendingMachine {

    private state: VENDING_MACHINE_STATE = VENDING_MACHINE_STATE.IDLE;
    private coins: number = 0;
    private inventory: Record<string, InventoryShelf> = {
        "1": {
            codeNumber: "1",
            price: 30,
            name: "Coca Cola",
            available: true,
        },
        "2": {
            codeNumber: "2",
            price: 35,
            name: "Pepsi",
            available: true,
        },
        "3": {
            codeNumber: "3",
            price: 40,
            name: "Fanta",
            available: true,
        },
        "4": {
            codeNumber: "4",
            price: 45,
            name: "Sprite",
            available: true,
        },
        "5": {
            codeNumber: "5",
            price: 30,
            name: "Lays",
            available: true,
        },
        "6": {
            codeNumber: "6",
            price: 35,
            name: "Doritos",
            available: true,
        },
    }
    private amountCollected: number = 0;
    

    public addCoins(value: number) {
        this.coins += value;
    }

    public updateState(state: VENDING_MACHINE_STATE) {
        this.state = state;
        console.log(`Vending machine in ${state} mode`);
    }

    public getBalance() {
        console.log(`Vending machine balance: ${this.coins}`);
        return this.coins;
    }

    public updateInventory(codeNumber: string) {
        if (!this.inventory[codeNumber].available) {
            console.log(`Oops! we do not have ${this.inventory[codeNumber].name} available any more.`);
            console.log(`Please select another product!`);
            this.state = VENDING_MACHINE_STATE.PRODUCT_SELECTION
            return false;
        }
        if (this.inventory[codeNumber].price > this.coins) {
            console.log(`Insufficient Balance!`);
            this.state = VENDING_MACHINE_STATE.ACCEPTING_COINS;
            return false;
        }

        console.log(`Dispensing product ${this.inventory[codeNumber].name}`);
        this.inventory[codeNumber].available = false;
        if (this.inventory[codeNumber].price < this.coins) {
            console.log(`Refunding the balance amount ${this.coins - this.inventory[codeNumber].price}`);
        }
        this.coins = 0;
        this.amountCollected += this.inventory[codeNumber].price
        this.state = VENDING_MACHINE_STATE.IDLE
        return true;
    }
}


export enum VENDING_MACHINE_STATE {
    "IDLE" = "IDLE",
    "ACCEPTING_COINS" = "ACCEPTING_COINS",
    "PRODUCT_SELECTION" = "PRODUCT_SELECTION",
    "VENDING_PRODUCT" = "VENDING_PRODUCT",
}


export interface InventoryShelf {
    codeNumber: string;
    price: number;
    name: string;
    available: boolean;
}

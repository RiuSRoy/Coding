import { IDatabase } from "./IDatabase";


export class InMemoryDatabase<T> implements IDatabase<T> {

    private map: Record<string, T | undefined> = {};
    get(key: string): T | undefined {
        return this.map[key];
    }
    put(key: string, value: T): void {
        this.map[key] = value;
    }
    delete(key: string): void {
        this.map[key] = undefined;
    }
    keys() {
        return Object.keys(this.map);
    }
    getAllData() {
        return this.map;
    }
}


import { AttributeType } from "../app";
import { InMemoryDatabase } from "../service/inMemoryDb";

export class QueryController {

    constructor(private repo: InMemoryDatabase<AttributeType>) {
    }

    get(key: string) {
        const value = this.repo.get(key);
        if (!value) {
            console.log("No entry found for key: " + key);
            return;
        }
        console.log(value);
        return value;
    }

    put(key: string, value: AttributeType) {
        for (const attributeName in value) {
            if (this.repo.get(key) && typeof value[attributeName] !== typeof this.repo.get(key)![attributeName]) {
                throw new Error(`Type mismatch for attribute '${attributeName}', key ${key}`);
            }
        }
        this.repo.put(key, value);
    }

    search(attrKey: string, attrValue: string | number | boolean) {
        const map = this.repo.getAllData();
        const list: string[] = [];
        for (let key in map) {
            if (map[key] != undefined && map[key]![attrKey] === attrValue) {
                list.push(key);
            }
        }
        return list;
    }

    delete(key: string) {
        this.repo.delete(key);
    }

    keys() {
        const list = this.repo.keys();
        console.log(list)
        return list;
    }
}
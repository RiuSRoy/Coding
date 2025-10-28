
export interface IDatabase<T> {
    get(key: string): T | undefined;
    put(key: string, value: T): void
    delete(key: string): void
    keys(): string[],
    getAllData(): Record<string, T | undefined>
}
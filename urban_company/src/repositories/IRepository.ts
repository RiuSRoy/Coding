// Repository Pattern - Abstract interface for data access
export interface IRepository<T> {
    save(entity: T): T;
    findById(id: number): T | undefined;
    findAll(): T[];
    update(id: number, entity: T): T | undefined;
    delete(id: number): boolean;
}

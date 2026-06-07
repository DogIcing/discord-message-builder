export class BaseBuilder<T extends object> {
    data: Partial<T> = {};

    constructor(defaults?: Partial<T>) {
        if (defaults) this.data = { ...defaults };
    }

    set<K extends keyof T>(property: K, value: T[K]) {
        this.data[property] = value;
        return this;
    }

    toJSON() {
        return this.data as T;
    }
}

export interface ICollection<T> {
    isEmpty(): boolean;
    removeFirst(): T | undefined;
    removeAll(): void;
    contains(element: T): boolean;
    iterator(): () => T;
}

export class Collection<T> implements ICollection<T> {
    private readonly items: Array<T>;
    
    constructor() {
        this.items = [];
    }

    public append(element: T): void {
        this.items.push(element);
    }

    public removeFirst(): T | undefined {
        return this.items.shift();
    }

    public getFirst(): T | undefined {
        return this.items[0];
    }

    public isEmpty(): boolean {
        return this.items.length == 0;
    }

    public removeAll(): void {
        this.items.length = 0;
    }

    public contains(element: T): boolean {
        return this.items.some(e => e === element);
    }
    
    public iterator(): () => T {
        return () => {
            this.items.forEach()
        }
    }
}


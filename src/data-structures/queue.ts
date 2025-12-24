import { Collection } from "./collection";

export interface IQueue<T> {
    enqueue(element: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
}

export class Queue<T> extends Collection<T> implements IQueue<T> {
    public enqueue(element: T): void {
        this.append(element);
    }
    
    public dequeue(): T | undefined {
        return this.removeFirst();
    }

    public peek(): T | undefined {
        return this.getFirst();
    }
}
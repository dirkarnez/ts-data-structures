interface IQueue<T> {
    add(element: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
}

class Queue<T> implements IQueue<T>{
    private readonly queue: Array<T>;
    constructor() {
        this.queue = [];
    }

    public add(element: T): void {
        this.queue.push(element);
    }

    public dequeue(): T | undefined {
        return this.queue.shift();
    }

    public peek(): T | undefined {
        return this.queue[0];
    }

    public isEmpty(): boolean {
        return this.queue.length == 0;
    }
}

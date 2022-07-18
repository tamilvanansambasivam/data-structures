class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    
    //enqueue method 

    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
}
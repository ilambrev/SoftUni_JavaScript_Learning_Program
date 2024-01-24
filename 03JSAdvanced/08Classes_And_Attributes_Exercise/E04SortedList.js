class List {
    elements = [];

    constructor() {
        this.size = 0;
    }

    add(element) {
        this.elements.push(element);
        this.elements.sort((e1, e2) => e1 - e2);
        this.size++;
    }

    remove(index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error('Index out of bound!');
        }
        this.elements.splice(index, 1)
        this.elements.sort((e1, e2) => e1 - e2);
        this.size--;
    }

    get(index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error('Index out of bound!');
        }
        return this.elements[index];
    }
}

// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
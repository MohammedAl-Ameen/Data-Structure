class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    AddData(value) {
        this.value = value;
    }

}


const CreateList = (arr) => {

    let nodeA = new Node(arr[0]);
    let nodeB = new Node(arr[1]);
    let nodeC = new Node(arr[2]);
    let nodeD = new Node(arr[3]);
    nodeA.next = nodeB;
    nodeB.next = nodeC;
    nodeC.next = nodeD;
    head = nodeA;

    return head;
}

const SumList = (head) => {
    let sum = 0;
    current = head;
    for (let i = 0; current != null; i++) {
        sum += current.value;
        current = current.next;
    }

    return sum;
}

const getNodeValue = (head, index) => {
    current = head;
    for (let i = 0; i <= index & current != null; i++) {
        if (i == index) {
            return current.value;
        }
        current = current.next;


    }

    return null
}


const createLinkedList = (values) => {
    const dummyHead = new Node(null);
    let tail = dummyHead;
    for (let val of values) {
        tail.next = new Node(val);
        tail = tail.next;
    }
    return dummyHead.next;
};

head = CreateList([1, 2, 3, 4]);


console.log(getNodeValue(head, 3));

console.log(createLinkedList([1, 2, 3, 4]));


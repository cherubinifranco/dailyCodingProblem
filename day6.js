/*
An XOR linked list is a more memory efficient doubly linked list. 
Instead of each node holding next and prev fields, it holds a field named both, 
which is an XOR of the next node and the previous node. 

Implement an XOR linked list; it has an add(element) which adds the element to the end, 
and a get(index) which returns the node at index.
*/

/*

I will later on study about XOR Linked List, for now this is just a linked list


*/

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addHead(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    add(data){
        let node = new Node(data)
        if(this.head == null){
            this.head = node;

        } else {
            let current = this.head;

            while(current.next){
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
    }

    addAt(data, index){
        if(index > 0 && index > this.size){
            console.log("Out of range")
            return;
        }
        if(index == 0){
            this.insertFirst(data);
            return
        }

        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while(count < index){
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }

    getAt(index){
        if(index > 0 && index > this.size){
            console.log("out of range");
            return
        }
        let current = this.head;
        let count = 0;
        while(count < index){
            current = current.next;
            count++;
        }
        return current.data;
    }

    removeAt(index){
        let previous;
        let count = 0;
        let current = this.head;

        if(index > 0 && index > this.size){
            console.log("out of range");
            return;
        }
        if(index == 0){
            this.head = current.next;
        }else{
            while(count < index){
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next;
            this.size--
        }


    }

    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    
    clearList(){
        this.head = null;
        this.size = 0;
    }
}

const ll = new LinkedList();

ll.add(200);
ll.add(400);
ll.addHead(100);
ll.add(500);



ll.printListData(); // Prints list

console.log("--------------------------------");

console.log(
    "Data in index 2:",
    ll.getAt(2) // Should print 400 based on the test list;
)

console.log("--------------------------------");
    
ll.removeAt(2) // Should remove 400 based on the test list;

ll.printListData(); // Prints list
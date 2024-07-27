class stackNode{
    constructor(val){
        this.val = val;
        this.next = null;    
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    push(val){
        if(this.size === 0){
            this.top = new stackNode(val);
        }
        else{
            const pushedNode = new stackNode(val);
            pushedNode.next = this.top;
            this.top = pushedNode;                                
        }
        this.size++;
    }

    getTop(){
        return this.top.val;
    }

    pop(){
        if(this.size === 0) return null;
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.val;
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(6);

console.log(myStack.size)
console.log(myStack.top)
console.log(myStack.getTop())

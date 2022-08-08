/*
Given the root to a binary tree, implement serialize(root), 
which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
*/


class Tree{
    constructor(){
        this.root = null;
    }
    addValue(val){
        let node = new Node(val)
        if(this.root == null){
            this.root = node;
        } else {
            this.root.addNode(node);
        }
    }
    serialize(){
        let res = [];
        this.root.visit(res);
        this.root = null;
        return res;
    }
    deserializes(str){
        this.addValue(str[Math.floor(str.length/2)])<
        str.forEach(elem => {
            this.addValue(elem);
        });
    }
}




class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }

    addNode(node){
        if(node.value < this.value){
            if(this.left == null){
                this.left = node;
            }else{
                this.left.addNode(node);
            }
        } else if(node.value > this.value){
            if(this.right == null){
                this.right = node;
            } else {
                this.right.addNode(node);
            }
        }
    }

    visit(res){
        if(this.left != null){
            this.left.visit(res);
        }
        res.push(this.value);
        if(this.right != null){
            this.right.visit(res);
        }
    }

}


let bTree = new Tree;

/*
    This part contains the test to see the results
    The results are displayed in the console
*/
for(let i = 0; i < 15; i++){
    bTree.addValue(Math.floor(100*Math.random(0,100)));
}

console.log("--------------First Binary Tree----------------")
console.log(bTree);

console.log("-----------Array made form the tree------------")
let newTree = bTree.serialize();
console.log(newTree);

console.log("---------------New Tree sorted-----------------")
bTree.deserializes(newTree)
console.log(bTree);
class TreeNode{
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }
}


class BinaryTree{
    constructor (){
        this.root = null;
    }

    insert(data){
        if (!this.root){
            this.root = new TreeNode(data);
            return ;
        }
        
        
    }
}
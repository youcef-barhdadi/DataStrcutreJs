
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }
    // create a node
    append(data){
        let node = new Node(data);
        let tmp = this.head;
        if (!this.head){
            this.head = node;
            return ;
        }
        while(tmp.next){
            tmp = tmp.next;
        }
        tmp.next = node;
    }
    prepend(data){
        let node = new Node(data);
        if (this.head == null){
            this.head = node;
            return ;
        }
        node.next= this.head;
        this.head = node;
    }
    // this methode delete node if have the same data with node
    delete(data){
        let pervious;
        let current;
        if(!this.head){
            return ;
        }        

        if (this.head.data === data){
            this.head = this.head.next;
            return ;
        }

        current = this.head;
        pervious = null;
        while(current){
   
            if (current.data === data){
                pervious.next =  current.next;
                break;
            }
            pervious = current;
            current = current.next;
        }
     
    }

    exits(data){
        let tmp = this.head;

        while(tmp){
            if (tmp === data)
                return true;
            tmp = tmp.next;
        }
        return false;
    }



    show()
    {
        let tmp = this.head;
        while(tmp){
            console.log(tmp.data);
            tmp = tmp.next;
        }
    }
}


let link = new LinkedList();

link.insertBeing(144);
link.insertBeing(1337);
link.insertBeing(154);
link.insertBeing(137);
link.insertBeing(17);
link.insertEnd(42);
link.deletenode(1337);
link.show();

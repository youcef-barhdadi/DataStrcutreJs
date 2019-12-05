// var Stack = function(){
//     this.count =0;

//     this.storage ={};


//     this.push = function(value){
//         this.storage[this.count] = value;
//         this.count++;
//     }
    
//     this.peek = function(){

//         return this.storage[this.count-1];
//     }

//     this.pop = function(){

//         if(this.count== 0){
//             return undefined;
//         }

//         this.count --;
//         var result = this.storage[this.count];
//         delete this.storage[this.count];



//         return result;
//     }

//     this.size = function(){
//         return this.count;   
//     }




// }






// function mySet(){
//     this.collection = [];

//     this.has = function(value){

//         return (this.collection.indexOf(value) != -1);
//     }
//     this.values = function(){
//         return this.collection;
//     }


//     this.add = function(value){

//         if(!this.has(value)){
//             this.collection.push(value);
//             return value;
//         }

//         return false;

//     }

//     this.remove = function(value){
//         if(this.has(value)){
//             var index = this.collection.indexOf(value);
//             collection.splice(index,1);
//             return true;
//         }
//         return false;
//     }

//     this.union = function(otherSet){
//         var newSet = new mySet();

//         var firstSet = this.values;

//         var secondSet = otherSet.values;

//         firstSet.forEach(element => {
//             newSet.add(element);
//         });

//         secondSet.forEach(element => {
//             newSet.add(element);
//         });


//         return newSet;
    

//     }

//     this.intersection = function(otherSet){

//         var interSet = new mySet();
//         var firstSet = this.values;




//         firstSet.forEach(value => {

//             if(otherSet.has(value))
//                 interSet.add(value);
//         });


//         return interSet;

//     }

//     this.difference = function(otherSet){

        
//         var diffSet = new mySet();
//         var firstSet = this.values;




//         firstSet.forEach(value => {

//             if(!otherSet.has(value))
//                 diffSet.add(value);
//         });


//         return diffSet;


//     }






// }




















// function Check (text){

//     var stack = new Stack();



//     for(var i=0;i<text.length;i++){

//         if(text[i]== "(" || text[i]=="{"){

//             var obj = {pos : i , char :text[i] }

//             stack.push(obj);
//         }


//         if(text[i]== ")" || text[i]=="}"){

//             stack.pop();
//         }
//     }

//     return stack.size() ==0 ? true: stack.pop() ;
// }




// document.addEventListener("DOMContentLoaded", function(event) {


//     var set = new mySet();
//     set.add(1);
//     set.add(1);
//     set.add(25);
//     set.add(1);
// console.log(set.values())

//     var button = document.getElementById("btn");
//     button.onclick =  function(){

//         var input = document.getElementById("input").value;


//         console.log(Check(input))


//     }
//    });
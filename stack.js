function Stack() {
  
   var items = [];
 
   this.push = function(element){
       items.push(element);
   };
 
   this.pop = function(){
       return items.pop();
   };
 
   this.isEmpty = function(){
       return items.length == 0;
   };
 
   this.size = function(){
       return items.length;
   };
 
   this.clear = function(){
       items = [];
   };
}

var stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
console.log(stack.pop());
console.log(stack.size());
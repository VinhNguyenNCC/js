function Stack()
{
 this.stac=new Array();
 this.pop=function(){
  return this.stac.pop();
 }
 
 this.isEmpty = function(){
   return this.stac.length() == 0;
 };
 
  this.size = function(){
    return this.stac.length();
  };
 this.push=function(item){
 this.stac.push(item);
 }
}
var stack=new Stack();
stack.push("A");
stack.push("B");

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());

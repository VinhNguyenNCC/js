function Queue()
{
 this.queue=new Array();
 this.shift=function(){
  return this.queue.shift();
 }
 
 this.isEmpty = function(){
   return this.queue.length() == 0;
 };
 
  this.size = function(){
    return this.queue.length();
  };
 this.push=function(item){
 this.queue.push(item);
 }
}
var queue=new Queue();
queue.push("A");
queue.push("B");

console.log(queue.shift());
console.log(queue.size());

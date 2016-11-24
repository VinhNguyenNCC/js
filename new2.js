function MyObject(name) {
  this.name = name;
};
var key1 = new MyObject("1");
var key2 = new MyObject("2");

var map = {};
map[key1] = 1;
map[key2] = 2;
console.log([key1])
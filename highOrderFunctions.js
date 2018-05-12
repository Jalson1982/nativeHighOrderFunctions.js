--------------forEach---------------------
function myForEach(callback,optionalThis){
	if(optionalThis) {
		callback = callback.bind(optionalThis);
	}
	for(var i=0;i<this.length;i++) {
		callback(this[i],i,this)
	}
}
Array.prototype.myForEach = myForEach;

******Tests*******
Test 1
const arr = [1,2,3];
arr.myForEach(function(num) {
  console.log(num)});
*Print on screen 1 2 3*
-----------------------
Test 2 (with optional argument this -> test from mdn)
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function(array) {
  array.myForEach(function(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- Note
};

const obj = new Counter();
obj.add([2, 5, 9]);
obj.count;
// 3 
obj.sum;

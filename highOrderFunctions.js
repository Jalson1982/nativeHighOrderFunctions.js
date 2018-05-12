//--------------forEach---------------------//
function myForEach(callback,optionalObject){
	if(optionalObject) {
		callback = callback.bind(optionalObject);
	}
	for(let i=0;i<this.length;i++) {
		callback(this[i],i,this)
	}
}
Array.prototype.myForEach = myForEach;

//******Tests*******
//Test 1
const arr = [1,2,3];
arr.myForEach(num => console.log(num));
//*Print on screen 1 2 3*
-----------------------
//Test 2 (with optional argument this -> test from mdn)
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
//16
//--------------Filter---------------------//
function myFilter(callback,optionalObject){
  let filteredArr =[];
  if(optionalObject){
    callback=callback.bind(optionalObject);
  }
  for(let i=0;i<this.length;i++){
    if (callback(this[i],i,this)){
    	  filteredArr.push(this[i])
    }
  }
  return filteredArr;
}
Array.prototype.myFilter = myfilter;
//******Tests*******
//Test 1
const arr = [1,2,3];
const myFilteredArray = arr.myFilter(num => num>=2);
console.log(myFilteredArray);
//*Print on screen [2,3]

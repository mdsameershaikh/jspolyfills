console.log("Bismilah");
var myArr = ['Sameer', 'Adnan', 'Anas', 'Abid', 'Shabaz', 'Jaffer']
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callbackFn) {
    let results = [];
    if (!callbackFn) {
      throw new TypeError('Callback function is missing');
    }
    for (let i = 0; i < this.length; i++) {
      /**
       * Can use results.push as well here 
       */
      results[i] = (callbackFn(this[i], i, this));
    }
    return results;
  }
}
let cb = (item) => item + " Shaikh"
let myArrWithLastNames = myArr.myFilter(cb);
console.log(myArrWithLastNames)
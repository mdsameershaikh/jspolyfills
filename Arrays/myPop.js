console.log('Bismillah');
import * as importedDataVariables from '../var.js'
if (!Array.prototype.myPop) {
    Array.prototype.myPop = function () {
        let lastElement = this[this.length - 1];
        this.length -= 1;
        return lastElement;
    }
}

console.log(importedDataVariables.stringArray)// print orignal array
console.log(importedDataVariables.stringArray.myPop())// prints the array after deleting the item on the last index
console.log(importedDataVariables.stringArray)// print mutated array

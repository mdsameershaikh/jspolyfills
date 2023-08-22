console.log('Bismillah');
import * as importedDataVariables from '../var.js'
if (!Array.prototype.myPush) {
    Array.prototype.myPush = function (item) {
        this[this.length] = item
        return this;
    }
}

console.log(importedDataVariables.stringArray)// prints orignal array
console.log(importedDataVariables.stringArray.myPush('Junaid')) //prints with pushed item;

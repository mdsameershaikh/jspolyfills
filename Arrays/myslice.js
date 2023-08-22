console.log('Bismillah');
import * as importedDataVariables from '../var.js'
if (!Array.prototype.mySlice) {
    Array.prototype.mySlice = function (start, end) {
        let results = [];
        if (!start) {
            results = this;
            return results;
        }
        if (start >= 0 && !end) {
            for (let i = start; i < this.length; i++) {
                results.push(this[i]);
            }
        } else if (start >= 0 && end <= this.length) {
            for (let i = start; i < end; i++) {
                results.push(this[i]);
            }
        }
        return results;
    }
}

console.log(importedDataVariables.stringArray.mySlice())// this should return the whole array as it is. 
console.log(importedDataVariables.stringArray.mySlice(1))// this should return the array starting from the first index
console.log(importedDataVariables.stringArray.mySlice(1, 3))// this should return the array starting from the first index till third index


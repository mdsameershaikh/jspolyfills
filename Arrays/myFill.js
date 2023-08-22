console.log('Bismillah');
import * as importedDataVariable from "../var.js";
if (!Array.prototype.myFill) {
    Array.prototype.myFill = function (value, start, end) {
        let results = [];
        if (!value) {
            throw new TypeError('myFill method require at least one arg i.e value');
        }
        if (value && start && end) {
            // vall , start and end 
            for (let i = start; i < end; i++) {
                results[i] = value;
            }

        } else if (value && start) {
            // val and start 
            for (let i = start; i < this.length; i++) {
                results[i] = value;
            }

        } else {
            // only val
            for (let i = 0; i < this.length; i++) {
                results[i] = value;
            }
        }



        return results
    }
}

console.log(importedDataVariable.stringArray.myFill(2));
console.log(importedDataVariable.stringArray.myFill('0', 2));


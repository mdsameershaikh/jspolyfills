console.log('Bismillah');
import * as importedDataVariables from '../var.js'
if (!Array.prototype.mySome) {
    Array.prototype.mySome = function (callBackFn) {
        let result = false;
        if (!callBackFn) {
            throw new TypeError('Callback function is must required to use this method');
        }
        for (let i = 0; i < this.length; i++) {
            if (callBackFn(this[i], i, this)) {
                result = true;
                break;
            }
        }
        return result;
    }
}

console.log(importedDataVariables.stringArray.mySome((item) => item == 'Sameer'))
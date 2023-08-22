console.log('Bismillah');
import * as importedDataVariable from '../var.js'
if (!Array.prototype.myEvery) {
    Array.prototype.myEvery = function (callBackFn) {
        let result = true
        if (!callBackFn) {
            throw new TypeError('Callback funcion is must to use this function')
        }
        for (let i = 0; i < this.length; i++) {
            if (!callBackFn(this[i], i, this)) {
                result = false;
                break;
            }
        }
        return result;
    }
}

console.log(importedDataVariable.stringArray.myEvery((item) => item.length > 100))
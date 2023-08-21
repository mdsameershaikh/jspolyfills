console.log('Bismillah');
import * as importedData from '../var.js'
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (callbackFn) {
        if (!callbackFn) throw new TypeError('Callback Function is required');
        for (let i = 0; i < this.length; i++) {
            callbackFn(this[i], i, this)
        }
    }
}

console.log(importedData.stringArray)
let newArrCopy = [];
importedData.stringArray.myForEach((item) => {
    newArrCopy.push(item)
})

console.log(newArrCopy)
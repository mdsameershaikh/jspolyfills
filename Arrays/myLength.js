console.log("Bismillah");
import * as importedDataVariables from '../var.js'

if (!Array.prototype.myLenght) {
    Array.prototype.myLength = function () {
        let count = 0;
        for (let i = 0; i < this.length; i++) {
            count++
        }
        return count;
    }
}
let arrayLenght = importedDataVariables.stringArray.myLength()
console.log(arrayLenght)
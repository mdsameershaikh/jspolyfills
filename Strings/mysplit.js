console.log("Bismillah");
/**
 * @param seperator This represents after which charachter the string to be seperated 
 * @param limit This represents how many elements to be pushed inside an array which is going to be returned
 * @returns array
 * 
 */

if (!String.prototype.mySplit) {
    String.prototype.mySplit = function (seprator, limit) {
        let arr = [];
        let arrIndex = 0;
        limit = limit ? limit : this.length;
        console.log(arrIndex)

        for (let i = 0; i < limit; i++) {
            let str = ""
            str += this[i];
            console.log(str)

            if (this[i] !== seprator) {
                arr[arrIndex] = str;

            } else {
                str = '';
            }

        }
        return arr;
    }
}

let sentence = 'My Name';
console.log(sentence.mySplit(' '))
// this solution is incomplete please do not refer this 
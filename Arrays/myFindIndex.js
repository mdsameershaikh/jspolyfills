console.log("bismillah");
import * as importedDataVariable from "../var.js";

Array.prototype.myFindIndex = function (callBackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callBackFn(this[i])) {
      return i;
    }
  }
  return -1;
};
console.log(importedDataVariable.stringArray);
console.log(
  importedDataVariable.stringArray.myFindIndex(
    (item) => item.toLowerCase() == "anas"
  )
);

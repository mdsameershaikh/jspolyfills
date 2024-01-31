if (!String.prototype.myToLowerCase) {
  String.prototype.myToLowerCase = function () {
    let lowerString = "";
    for (let i = 0; i < this.length; i++) {
      if (this.charCodeAt(i) >= 65 && this.charCodeAt(i) <= 90) {
        //  convert to lower case
        lowerString += String.fromCharCode(this.charCodeAt(i) + 32);
      } else {
        // construct the string as it is
        lowerString += this[i];
      }
    }
    return lowerString;
  };
}

let str = "Sameer";
console.log(str.myToLowerCase());

console.log('Bismillah');


if(!Array.prototype.Myfilter){
  Array.prototype.Myfilter = function (callbackFn){
    let results = [];
   for(let i = 0; i< this.length; i++){
    if(!callbackFn){
      throw new TypeError('Callback function is required')
    }
    if(callbackFn(this[i], i, this)){
     results.push(this[i])
    }
   }
   return results
  }

} 

let arr = ['a', 'b', 'c', 'D', 'A'];

let checkSchars = arr.Myfilter((item)=>{
  if(item.toLowerCase() == 'a' ){
   return true;
  }
 
})

console.log(checkSchars)



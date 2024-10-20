const numbers =[45, 4, 9, 16, 25];
Array.prototype.mySome = function(num){
    for(let i = 0; i < this.length; i++){
        if(this[i]>num){
            return true;
        }
    }
    return false;
}
const result = numbers.mySome(40);
console.log(result); // true
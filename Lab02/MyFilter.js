const numbers =[45, 4, 9, 16, 25];
Array.prototype.myFilter = function(num) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i]>num) {
        newArray.push(this[i]);
        }
    }
    return newArray;
    }
const value = numbers.myFilter(18);
console.log(value);
// Output: [45, 16, 25

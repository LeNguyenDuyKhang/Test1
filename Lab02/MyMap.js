const numbers = [4, 9, 16, 25, 29];
Array.prototype.myMap = function(callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(this[i]*2);
    }
    return newArray;
}
const value = numbers.myMap(numbers);
console.log(value);
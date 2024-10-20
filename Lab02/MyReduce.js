const numbers = [45, 4, 9, 16, 25];
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator === undefined) {
            accumulator = this[i];
        } else {
            accumulator = callback(accumulator, this[i]);
        }
    }
    return accumulator;
}
const result = numbers.myReduce((total, num) => total + num, 0);
console.log(result); // 99
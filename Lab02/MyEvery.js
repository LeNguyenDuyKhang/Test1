const numbers = [45, 4, 9, 16, 25];
Array.prototype.myEvery = function(num) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] < num) {
            return false;
        }
    }
    return true;
}
const result = numbers.myEvery(40);
console.log(result); // false
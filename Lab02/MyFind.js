const numbers = [4, 9, 16, 25, 29];
Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] > 18) {
            return this[i];
        }
    }
}
const first = numbers.myFind(18)
console.log(first);
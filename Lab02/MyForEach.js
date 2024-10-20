const numbers = [45, 4, 9, 16, 25];

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

numbers.myForEach((num) => {
    console.log(num);
});
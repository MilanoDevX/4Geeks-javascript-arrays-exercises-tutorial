let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Your code here
function findMax(arr) {
    let max = 0;
    arr.forEach(item => {
        if (item > max) {
            max = item;
        }
    })
    return max;
}
console.log(findMax(myArray));
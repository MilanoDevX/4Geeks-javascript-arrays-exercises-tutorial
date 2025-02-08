// Your code here
function random() {
    let randomNumber = Math.round(Math.random());
    return randomNumber;
}

function matrixBuilder(number) {
    let matrix = [];
    for (let i=0; i<number; i++) {
        matrix[i] = [];
        for (let j=0; j<number; j++) {
            matrix[i][j] = random();
        }
    }
    return matrix;
}
// Do not change anything from this line down
console.log(matrixBuilder(5))

// Your code here
function lyricsGenerator(arr) {
    let string = "";
    for (let i=0; i<arr.length; i++) {
        if (arr[i] == 0) {
            string = string + "Boom ";
        }
        if (arr[i] == 1 && (arr[i+1] != 1 || arr[i+2] != 1)) {
            string = string + "Drop the bass ";
        }
        if (arr[i] == 1 && arr[i+1] == 1 && arr[i+2] == 1) {
            string = string + "!!!Break the bass!!! ";
            i = i+2;
        }

    };
    return string;
}


// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))

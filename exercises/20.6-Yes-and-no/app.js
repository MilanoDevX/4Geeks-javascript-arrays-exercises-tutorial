let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
let newArray = theBools.map(item => {
        if (item == 0) {
            return "woko";
        } 
        if (item == 1) {
            return "wiki";
        } 
    }
)
console.log(newArray);
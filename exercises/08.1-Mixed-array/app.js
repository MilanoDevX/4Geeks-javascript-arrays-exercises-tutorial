let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let newArray = [];
for (i=0; i<mix.length; i++) {
    const type = typeof(mix[i]);
    newArray.push(type);
}
console.log(newArray);

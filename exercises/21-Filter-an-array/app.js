let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

// Your code here
let resultingNames = allNames.filter(name => {
    if (name[0] == "R") {
        return name;
    }
})
console.log(resultingNames);

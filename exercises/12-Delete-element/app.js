let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
function deletePerson (name) {
    newArray = people.filter((item) => item != name);
    return newArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

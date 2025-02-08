let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

// Your code here
function filterByName(arr, str) {
    let newArray = arr.filter(name => {
        nameToLowerCase = name.toLowerCase();
        if (nameToLowerCase.includes(str)) {
            return name;
        }
    })
    return newArray;
}

console.log(filterByName(names, 'am'));

let i = 20;

do {
    // Magic goes here
    if (i == 0) {
        i="LIFTOFF";
        console.log(i);
    }
    if (i % 5 == 0 && i > 0 ) {
        console.log(i + "!");    
    } 
    if (i % 5 != 0 && i > 0 ) {
        console.log(i);
    }
    i--;
} while (i >= 0);

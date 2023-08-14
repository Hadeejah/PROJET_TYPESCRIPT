"use strict";
console.log("------------------test2------------------------------");
const samaTableau1 = [17, 2, 13, 14];
const somme1 = samaTableau1.reduceRight((accumulator, currentValue) => {
    console.log(accumulator + currentValue);
    return accumulator + currentValue;
}, 0);
console.log(somme1 / samaTableau1.length);

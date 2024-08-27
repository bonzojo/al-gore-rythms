// Set a range
let range = [];
function setRange(start, end, step = 1) {
    for (let i = start; i <= end; i += step) {
        range.push(i);
    }
    return range;
}
setRange(0, 20);

// Math random a number
const randomNum = Math.floor(Math.random() * range.length);
let n = range[randomNum];

//---
console.log(`n is ${n} \n`);
console.log(`---------------------------------`);
//---

// Linear Search
console.log(`Linear Search`);
function linearSearch(n) {
    let numOps = 0;
    for (let i = 0; i < n; i++) {
        console.log(`counting for n... ${i}`)
        numOps += 1;
    }
    return console.log(`n is ${n} and it took ${numOps} operations`);
}
linearSearch(n);

//---
console.log('\n');
console.log(`---------------------------------`);
//---

// Binary Search
console.log('Binary Search')
function binarySearch(range, n) {
    let leftBound = 0;
    let rightBound = range.length -1;
    let numOps = 0;

    while(leftBound <= rightBound) {
        numOps++;
        let middle = Math.floor((leftBound + rightBound) / 2);
        console.log(`Checking for the middle index... ${middle}`);
    
        if(range[middle] === n) {
            return console.log(`n is ${n} and it took ${numOps} operations!`)
        }

        if(range[middle] < n) {
            leftBound = middle + 1;
        } else {
            rightBound = middle - 1;
        }
    } 
}
binarySearch(range, n);
// first example of first task

let counter = 0;

while (counter < 100) {
    counter++
    console.log(counter);
}

//second example of first task

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//"a" of first example of second and third task

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i + " - кратное: 3");
    } else if (i % 5 == 0) {
        console.log(i + " - кратное: 5");
    } else if (i % 15 == 0) {
        console.log(i + " - кратное: 15");
    }
}

//"b" of first example of second and third task

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0 && i % 15 == 0) {
        console.log(i + " - кратное: 3, 5 и 15");
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " - кратное: 3 и 5");
    } else if (i % 3 == 0) {
        console.log(i + " - кратное: 3");
    } else if (i % 5 == 0) {
        console.log(i + " - кратное: 5");
    } else if (i % 15 == 0) {
        console.log(i + " - кратное: 15");
    }
}

// "a" of second example of second and third task

let a = 3;
let b = 5;
let c = 15;

for (let i = 1; i <= 100; i++) {
    if (i % a == 0) {
        console.log(i + ` - кратное: ${a}`);
    } else if (i % b == 0) {
        console.log(i + ` - кратное: ${b}`);
    } else if (i % c == 0) {
        console.log(i + ` - кратное: ${c}`);
    }
}

let a = 3;
let b = 5;
let c = 15;

// "b" of second example of second and third task

for (let i = 1; i <= 100; i++) {

    if (i % a == 0 && i % b == 0 && i % c == 0) {
        console.log(i + ` - кратное: ${a}, ${b} и ${c}`);
    } else if (i % a == 0 && i % b == 0) {
        console.log(i + ` - кратное: ${a} и ${b}`);
    } else if (i % c == 0) {
        console.log(i + ` - кратное: ${c}`);
    } else if (i % b == 0) {
        console.log(i + ` - кратное: ${b}`);
    } else if (i % a == 0) {
        console.log(i + ` - кратное: ${a}`);
    }
}


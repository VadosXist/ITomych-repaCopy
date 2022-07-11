// first task

function myFunction(arr) {
    return arr.sort()
}

console.log(myFunction(["b", "c", "d", "a"])) //Expected [‘a’, ‘b’, ‘c’, ‘d’]
console.log(myFunction(["z", "c", "d", "a", "y", "a", "w"])) //Expected [‘a’, ‘a’, ‘c’, ‘d’, ‘w’, ‘y’, ‘z’]

// first example of second task

function myFunction(a, b) {
    let sum = 0;
    for (let num of a) {
        if (num > b) {
            sum += num;
        }
    }
    return sum;
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2)) //Expected 25
console.log(myFunction([-10, -11, -3, 1, -4], -3)) //Expected 1
console.log(myFunction([78, 99, 100, 101, 401], 99)) //Expected 602

// second example of second task

function myFunction(a, b) {
    let result = a.reduce((sum, current) => {
        if (current > b) {
            return sum + current;
        } else {
            return sum;
        }
    }, 0)
    return result;
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2)) //Expected 25
console.log(myFunction([-10, -11, -3, 1, -4], -3)) //Expected 1
console.log(myFunction([78, 99, 100, 101, 401], 99)) //Expected 602

// first example of third task
// Честно скажу, 3тье задание далось оч сложно, мне и помогали, и в инете искал инфу, и лекцию пересматривал. Уделю больше внимания этим методам, бо не до конца разобрался.

function myFunction(a, b) {
    const mergeArr = a.concat(b);
    const filtredArr = mergeArr.filter(function (num, i) {
        return mergeArr.indexOf(num) === i
    })
    return filtredArr.sort((a, b) => a - b);
}

console.log(myFunction([1, 2, 3], [3, 4, 5])) //Expected [ 1, 2, 3, 4, 5 ]
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) //Expected [ -11, -10, 5, 22, 41,  42, 333]

// second example of third task

function myFunction(a, b) {
    let result = a;
    b.forEach(function (elem) {
        if (!a.includes(elem)) {
            result.push(elem)
        }
    })
    return result.sort((a, b) => a - b);
}

console.log(myFunction([1, 2, 3], [3, 4, 5])) //Expected [ 1, 2, 3, 4, 5 ]
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) //Expected [ -11, -10, 5, 22, 41,  42, 333]
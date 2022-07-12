// Write a function that takes an object as argument containing properties with personal information
// Напишите функцию, которая принимает в качестве аргумента объект, содержащий свойства с личной информацией

// Extract firstName, lastName, size, and weight if available
// Извлекаем имя, фамилию, размер и вес, если они доступны

// If size or weight is given transform the value to a string
// Если задан размер или вес, преобразовать значение в строку

// Attach the unit cm to the size
// Прикрепляем единицу см к размеру

// Attach the unit kg to the weight
// Прикрепляем единицу кг к весу

// Return a new object with all available properties that we are interested in
// Возвращаем новый объект со всеми доступными свойствами, которые нас интересуют

function myFunction(obj) {
    const { fn, ln, size, weight } = obj;
    const result = { fn, ln };
    if (size) {
        result.size = size.toString() + "cm"
    }
    if (weight) {
        result.weight = weight.toString() + "kg"
    }
    return result;
}

console.log(myFunction({ fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67 }))

//Expected {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

console.log(myFunction({ fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102 }))

//Expected {fn: 'Martin', ln: 'Harper', weight: '102kg'}

console.log(myFunction({ fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 }))

//Expected {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}

console.log(myFunction({ fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de' }))

//Expected {fn: 'Matthew', ln: 'Müller'}


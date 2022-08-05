class Dog {

    constructor(options) {
        this.breed = options.breed;
        this.name = options.name;
        this.age = options.age;
        this.sex = options.sex;
        this.growth = options.growth;
        this.color = options.color;
        this.trained = options.trained;
        this.isSleep = Boolean(options.isSleep)
    }

    setIsSleep(isSleep) {
        this.isSleep = isSleep
    }

    isWakeUp() {
        return !this.isSleep
    }
}

const pug = new Dog({
    breed: "Pug",
    name: "Phoebe",
    age: 3,
    sex: "female",
    growth: 30,
    color: "сappuccino",
    trained: true,
})

pug.setIsSleep(true)
console.log(pug.isWakeUp());
pug.setIsSleep(false)
console.log(pug.isWakeUp());
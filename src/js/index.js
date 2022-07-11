const pug = {
    breed: "Pug",
    name: "Phoebe",
    age: 3,
    sex: "female",
    growth: 30,
    color: "сappuccino",
    trained: true,
    dogsBark() {
        console.log("woof-woof!");
    },
    sleeping() {
        console.log("snore...");
    },
    jump() {
        console.log("jumps somewhere");
    }
}

function Dog(breed, name, age, sex, growth, color, trained) {
    this.breed = breed;
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.growth = growth;
    this.color = color;
    this.trained = trained;
    this.dogsBark = function () {
        console.log("woof-woof!");;
    };
    this.sleeping = function () {
        console.log("snore...");
    };
    this.jump = function () {
        console.log("jumps somewhere");
    };
}

const spitz = new Dog("Spitz", "Petty", 2, "female", 20, "white", false);

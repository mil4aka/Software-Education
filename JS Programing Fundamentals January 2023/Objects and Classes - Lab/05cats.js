function catFactory(arr) {
    class Cat {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }
        meow(catName, catAge) {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats = [];

    for (let catData of arr) {
        let splitted = catData.split(" ");
        let kitten = new Cat(splitted[0], splitted[1]);
        cats.push(kitten)
        kitten.meow();
    }
}

catFactory(['Mellow 2', 'Tom 5'])
catFactory(['Candy 1', 'Poppy 3', 'Nyx 2'])
function wildZoo(input) {
    let currComm = input.shift().split(": ");
    let animals = new Map();
    let foodArea = new Map();

    while (currComm != "EndDay") {

        switch(currComm[0]) {
            case "Add": 
            let splitted = currComm[1].split("-");
            let name = splitted[0];
            let food = Number(splitted[1]);
            let area = splitted[2];

            let properties = {food: food, area: area}

            if (animals.has(name)) {
                let currFood = animals.name.food;
                let newFood = food;
                animals.name.food = newFood;
            } else {
                animals.set(name, properties)
            }


            console.log(animals);
            break;
        }
        currComm = input.shift().split(": ");
    }

}

wildZoo(["Add: Adam-4500-ByTheCreek",
"Add: Maya-7600-WaterfallArea",
"Add: Maya-1230-WaterfallArea",
"Feed: Jamie-2000",
"EndDay"])


// wildZoo(["Add: Jamie-600-WaterfallArea",
// "Add: Maya-6570-WaterfallArea",
// "Add: Adam-4500-ByTheCreek",
// "Add: Bobbie-6570-WaterfallArea",
// "Feed: Jamie-2000",
// "Feed: Adam-2000",
// "Feed: Adam-2500",
// "EndDay"])


// wildZoo(["Add: Bonie-3490-RiverArea",
// "Add: Sam-5430-DeepWoodsArea",
// "Add: Bonie-200-RiverArea",
// "Add: Maya-4560-ByTheCreek",
// "Feed: Maya-2390",
// "Feed: Bonie-3500",
// "Feed: Johny-3400",
// "Feed: Sam-5500",
// "EndDay"])

function cardGame(input) {
    let people = {};
    for (let line of input) {
        let [name, cards] = line.split(": ");
        cards = cards.split(", ");

        if (!people.hasOwnProperty(name)) {
            people[name] = new Set();
        }

        for (let card of cards) {
            people[name].add(card)
        }
    }

    for (let [name, cards] of Object.entries(people)) {
        let sum = 0;
        for (let card of cards) {
            let cardPower = card[0];
            let cardColor = card[card.length - 1];
            switch (cardPower) {
                case "A": cardPower = 14; break;
                case "K": cardPower = 13; break;
                case "Q": cardPower = 12; break;
                case "J": cardPower = 11; break;
                case "1": cardPower = 10; break;
            }
            switch (cardColor) {
                case "S": cardColor = 4; break;
                case "H": cardColor = 3; break;
                case "D": cardColor = 2; break;
                case "C": cardColor = 1; break;
            }
            sum += Number(cardPower) * cardColor;
        }
        console.log(`${name}: ${sum}`);
    }
}

// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ])

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
)
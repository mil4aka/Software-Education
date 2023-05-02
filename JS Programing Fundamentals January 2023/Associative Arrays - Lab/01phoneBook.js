function phoneBook(input) {
    let assocObj = {};
    for (let el of input) {
        let [key, value] = el.split(" ");
        assocObj[key] = value;
    }
    for(let key in assocObj) {
        console.log(`${key} -> ${assocObj[key]}`);
    }
}

phoneBook(
    ['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)
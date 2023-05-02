function partyTime(input) {
    let guestListVIP = new Map();
    let guestListRegular = new Map();
    let command = input.shift();
    while (command != "PARTY") {
        if (command.charCodeAt(0) < 48 || command.charCodeAt(0) > 57) {
            guestListRegular.set(command, "regular");
        } else {
            guestListVIP.set(command, "VIP");
        }
        command = input.shift();
    }
    while (input.length > 0) {
        command = input.shift();
        if (guestListVIP.has(command)) {
            guestListVIP.delete(command);
        } else if (guestListRegular.has(command)) {
            guestListRegular.delete(command);
        }
    }
    // print guest list with vip first
    let guestsCountVIP = Array.from(guestListVIP).length;
    let guestsCountRegular = Array.from(guestListRegular).length;
    console.log(guestsCountRegular + guestsCountVIP);
    for (let [key, value] of guestListVIP.entries()) {
        console.log(key);
    }
    for (let [key, value] of guestListRegular.entries()) {
        console.log(key);
    }
}

partyTime(
    ['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]);

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])
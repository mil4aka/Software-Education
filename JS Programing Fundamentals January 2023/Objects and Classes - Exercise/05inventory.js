function inventory(arr) {
    let heroes = [];
    for (let el of arr) {
        let [name, level, items] = el.split(" / ");
        let currentHero = {
            name,
            level: Number(level),
            items
        }
        heroes.push(currentHero)
    }
    let sorted = heroes.sort((a, b) => a.level - b.level);

    for (let el of sorted) {
        console.log(`Hero: ${el.name}\nlevel => ${el.level}\nItems => ${el.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])
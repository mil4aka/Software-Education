function heroesOfCodeAndLogic(input) {
    let heroesCount = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let heroInfo = input.shift().split(" ");
        let name = heroInfo[0];
        let hp = Number(heroInfo[1]);
        let mp = Number(heroInfo[2]);

        heroes[name] = {
            hp,
            mp
        }
    }

    let gameCommands = {
        CastSpell,
        TakeDamage,
        Recharge,
        Heal
    }

    let currComm = input.shift().split(" - ");
    while (currComm != "End") {
        let action = currComm[0];
        let hero = currComm[1];
        let value = Number(currComm[2]);
        let name = currComm[3];

        gameCommands[action](hero, value, name);

        currComm = input.shift().split(" - ");
    }

    function CastSpell(name, mpNeeded, spellName) {
        if (heroes[name].mp >= mpNeeded) {
            let leftMP = heroes[name].mp -= mpNeeded;
            heroes[name].mp = leftMP;
            console.log(`${name} has successfully cast ${spellName} and now has ${leftMP} MP!`);
        } else {
            console.log(`${name} does not have enough MP to cast ${spellName}!`);
        }
    }

    function TakeDamage(name, hpDamage, enemy) {
        heroes[name].hp -= hpDamage;
        if (heroes[name].hp > 0) {
            console.log(`${name} was hit for ${hpDamage} HP by ${enemy} and now has ${heroes[name].hp} HP left!`);
        } else {
            console.log(`${name} has been killed by ${enemy}!`);
            delete heroes[name];
        }
    }

    function Recharge(name, mpRechargeAmount) {
        let currHeroMP = heroes[name].mp;
        heroes[name].mp += mpRechargeAmount;
        if (heroes[name].mp > 200) {
            heroes[name].mp = 200;
        }
        let rechargedAmount = heroes[name].mp - currHeroMP;
        console.log(`${name} recharged for ${rechargedAmount} MP!`);
    }

    function Heal(name, hpHealed) {
        let currHeroHP = heroes[name].hp;
        heroes[name].hp += hpHealed;
        if (heroes[name].hp > 100) {
            heroes[name].hp = 100;
        }
        let healedAmount = heroes[name].hp - currHeroHP;
        console.log(`${name} healed for ${healedAmount} HP!`);
    }

    let entries = Object.entries(heroes);
    for (let heroData of entries) {
        let name = heroData[0];
        let hero = heroData[1];
        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    }
}

heroesOfCodeAndLogic(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]);

heroesOfCodeAndLogic(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"])
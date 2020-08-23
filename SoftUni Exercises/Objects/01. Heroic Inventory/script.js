function heroInventory(input) {
    let heroData = [];

    for (let i = 0; i < input.length; i++) {
        let currHero = input[i].split(" / ");

        let heroItems = [];
        let heroName = currHero[0]
        let heroLevel = Number(currHero[1]);

        if (currHero.length > 2) {
            heroItems = currHero[2].split(", ")
        }

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));
}

heroInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);

heroInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
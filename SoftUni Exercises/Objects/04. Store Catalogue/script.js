function storeCatalogue(input) {
    let storeProducts = {};

    for (let i = 0; i < input.length; i++) {
        const currProduct = input[i].split(" : ");

        for (let j = 0; j < 1; j++) {
            const productName = currProduct[j];
            const productPrice = Number(currProduct[j + 1]);
            const letter = productName.charAt(0);

            if (storeProducts.hasOwnProperty(letter)) {
                storeProducts[letter] += ` / ${productName}: ${productPrice}`;
                break;
            }

            storeProducts[letter] = `${productName}: ${productPrice}`;
        }
    }

    let sortedProducts = Object.entries(storeProducts).sort().reduce((o, [k, v]) => (o[k] = v, o), {});

    for (const key in sortedProducts) {
        let words = sortedProducts[key].split(" / ").sort();
        console.log(`${key}\n ${words.join("\n ")}`);

    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);

storeCatalogue(['Banana : 2',
    'Rubics Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);
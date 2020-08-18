function calculateHowMuchMoneyForFruit(fruit, weight, pricePerKilogram) {
    let roundWeight = (weight / 1000).toFixed(2);
    let price = (weight * pricePerKilogram / 1000).toFixed(2);
    
    return `I need $${price} to buy ${roundWeight} kilograms ${fruit}.`;
}

console.log(calculateHowMuchMoneyForFruit('orange', 2500, 1.80));
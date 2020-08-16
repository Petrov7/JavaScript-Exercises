function romanToInt(romanNumb) {
    const arr = romanNumb.split("");

    let converter = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let total = 0;
    let current, currentValue, next, nextValue;

    for (let i = 0; i < arr.length; i++) {
        current = arr[i]
        currentValue = converter[current];
        
        next = arr[i + 1];
        nextValue = converter[next];

        if (currentValue < nextValue ) {
            total -= (currentValue);
        } else {
            total += (currentValue)
        }
    }

    return total
}

console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
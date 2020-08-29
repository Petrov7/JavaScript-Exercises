function plusOne(digits) {
    if (digits.length === 0) {
        return [1];
    }

    let last = digits.length - 1;

    if (digits[last] === 9) {
        return plusOne(digits.slice(0, last)).concat([0]);
    }

    return digits.slice(0, last).concat([digits[last] + 1]);
}

console.log(plusOne([9, 9]));
console.log(plusOne([4, 3, 2, 1]));
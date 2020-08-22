function magicMatrices(input) {
    let sum = 0;
    input[0].forEach(x => sum += x);

    for (let row = 0; row < input.length; row++) {
        let comparingSum = 0;
        for (let i = 0; i < input[row].length; i++) {
            comparingSum += input[row][i];
        }

        if (sum !== comparingSum) {
            return false;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let comparingSum = 0;
        for (let col = 0; col < input[i].length; col++) {
            comparingSum += input[col][i];
        }

        if (sum !== comparingSum) {
            return false;
        }
    }
    return true;

}

console.log(magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
));

console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));


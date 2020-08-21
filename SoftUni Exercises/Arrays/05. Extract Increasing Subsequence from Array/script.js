function increasingSubsequenceArray(input) {
    let currBiggestOne = input[0];

    for (let i = 0; i < input.length; i++) {
        if (currBiggestOne <= input[i]) {
            currBiggestOne = input[i];
            console.log(currBiggestOne);
        }
    }
}

increasingSubsequenceArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
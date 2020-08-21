function rotateArray(input) {
    let rotateNumb = input.pop();

    for (let i = 0; i < rotateNumb; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(" "));
}

rotateArray(['1',
    '2',
    '3',
    '4',
    '2']
);

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);
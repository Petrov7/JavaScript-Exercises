function sortArray(input) {
    let wordFilter = input.sort((x, y) => x.length - y.length || x.localeCompare(y));

    console.log(wordFilter.join("\n"));
}

sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);

sortArray(['test',
    'Deny',
    'omen',
    'Default']
)
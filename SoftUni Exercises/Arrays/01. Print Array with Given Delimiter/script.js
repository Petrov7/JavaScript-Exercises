function arrayDelimiter(arr) {
    let delimiter = arr.pop();
    let finalWord = "";

    while(arr.length > 0) {
        let word = arr[0];

        if (arr.length === 1) {
            finalWord += `${word}`
            break;
        }

        finalWord += `${word}${delimiter}`
        arr.shift();
    }

    return finalWord;
}

console.log(arrayDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
));

console.log(arrayDelimiter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']
));


function composeToObject(input) {
    let obj = {};

    for (let i = 0; i < input.length; i+=2) {
        let value = Number(input[i+1]);
        
        obj[input[i]] = value;
    }

    return obj;
}

console.log(composeToObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
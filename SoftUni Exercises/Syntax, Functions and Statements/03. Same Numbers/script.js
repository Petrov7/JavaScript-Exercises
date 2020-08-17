function sameNumbers(number) {
    let arr = number.toString().split("");
    let sum = arr.map(Number).reduce((a, b) => a + b);

    return `${arr.every(x => x === arr[0])}\n${sum}`; 
}

console.log(sameNumbers(1234));
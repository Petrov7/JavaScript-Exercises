function gcd(numbOne, numbTwo) {
    if (!numbTwo) {
        return numbOne
    }

    return gcd(numbTwo, numbOne % numbTwo);
}

console.log(gcd(15, 5));
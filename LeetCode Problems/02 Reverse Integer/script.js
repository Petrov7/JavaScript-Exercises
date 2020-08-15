function reverse(x) {
    const reverseValue = x.toString().split('').reverse().join('');
    const answer = Math.sign(x) * parseInt(reverseValue);
    
    
    if (answer > 0x7FFFFFFF || answer < -0x7FFFFFFF ) {
        return 0;
    }

    return answer;
}

console.log(reverse(-123));
console.log(reverse(-2147483648));

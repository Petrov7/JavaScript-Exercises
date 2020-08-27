function lengthOfLastWord(s) {
    let splitString = s.trim().split(" ").pop().length;
    
    return splitString;
}

console.log(lengthOfLastWord("Hello Worldd"));
console.log(lengthOfLastWord("a "));
function longestCommonPrefix(strs) {
    const len = strs.length;
  if (len === 0) return "";

  let prefix = strs[0];
  for (let i = 1; i < len; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  
  return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log('sd');
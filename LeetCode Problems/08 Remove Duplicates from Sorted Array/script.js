function removeDuplicates(nums) {
    let first = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[first] !== nums[i]) {
            first++;
            nums[first] = nums[i];
        } 
    }

    nums = nums.slice(0, first+1);
    return nums.length;
}

console.log(removeDuplicates([1,2]));
console.log(removeDuplicates([1,1,2]));
//console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
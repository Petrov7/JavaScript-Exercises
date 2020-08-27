function searchInsertPosition(nums, target) {
    for (const i in nums) {
        if (nums[i] === target) {
            return i;
        }
    }

    nums.push(target);
    let notFound = nums.sort((a, b) => a - b);

    console.log(notFound);
    return notFound.indexOf(target);
}

console.log(searchInsertPosition([1, 3, 5, 6], 5));
console.log(searchInsertPosition([3, 5, 7, 9, 10], 8));
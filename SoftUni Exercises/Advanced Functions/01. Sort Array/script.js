function sortArray(arr, sortType) {
    let sort = {
        'asc' : (a, b)=> a-b,
        'desc' : (a, b)=> b-a,
    };

    arr.sort(sorter[sortType]);
    
    return arr;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
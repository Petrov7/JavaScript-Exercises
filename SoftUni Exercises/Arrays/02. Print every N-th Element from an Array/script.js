function EveryNthElementFromArray(arr) {
    let numb = Number(arr.pop());

    for (let i = 0; i < arr.length; i+=numb) {
        console.log(arr[i]);
    }
}

EveryNthElementFromArray(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);

EveryNthElementFromArray(['dsa',
'asd', 
'test', 
'tset', 
'2']
);
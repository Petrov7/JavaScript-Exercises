function addRemoveElements(arr) {
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            output.push(i + 1);
        } else if (arr[i] == "remove") {
            output.pop();
        }
    }

    if (output.length == 0) {
        console.log("Empty")
        return;
    }

    console.log(output.join(`\n`));
}

addRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
);

addRemoveElements(['remove', 
'remove', 
'remove']
);
function usernames(input) {
    let removeDups = new Set(input);
    let sortArr = Array.from(removeDups).sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sortArr.join("\n"));
}

usernames(['Ashton',
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
)
function solve() {
    let number = document.getElementById('input');
    let selectMenuTo = document.getElementById('selectMenuTo');
    let btn = document.getElementsByTagName('button')[0];
    let result = document.getElementById('result');

    selectMenuTo.innerHTML = `
    <option selected value=""></option>
    <option value="hexadecimal">Hexadecimal</option>
    <option value="binary">Binary</option>`;

    btn.addEventListener('click', (x) => {
        if (selectMenuTo.value === "hexadecimal") {
            let hexString = Number(number.value).toString(16).toUpperCase();

            result.value = hexString;
        } else if (selectMenuTo.value === "binary") {
            let binaryNumb = Number(number.value).toString(2);

            result.value = binaryNumb;
        }
    });
}
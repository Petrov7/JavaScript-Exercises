function solve() {
    const btn = document.querySelectorAll('button');
    const expressionOutput = document.getElementById('expressionOutput');
    const result = document.getElementById('resultOutput');

    for (let i = 0; i < btn.length; i++) {
        const currBtn = btn[i];

        currBtn.addEventListener('click', (x) => {
            expressionOutput.textContent += currBtn.value;

            if (currBtn.value == 'Clear') {
                expressionOutput.textContent = "";
                result.textContent = "";
            }

            if (currBtn.value === '=') {
                let splitOutput = expressionOutput.textContent.split("");
                splitOutput.pop();

                if (splitOutput.includes('+')) {
                    let numbers = splitOutput.join("").split("+");

                    result.textContent = +numbers[0] + +numbers[1];
                } else if (splitOutput.includes('/')) {
                    let numbers = splitOutput.join("").split("/");

                    result.textContent = +numbers[0] / +numbers[1];
                } else if (splitOutput.includes('*')) {
                    let numbers = splitOutput.join("").split("*");

                    result.textContent = +numbers[0] * +numbers[1];
                } else if (splitOutput.includes('-')) {
                    let numbers = splitOutput.join("").split("-");

                    result.textContent = +numbers[0] - +numbers[1];
                }
            }
        });
    }
}
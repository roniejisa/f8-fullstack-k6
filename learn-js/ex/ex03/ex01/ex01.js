// 0 1 1 2 3 5 8 13 15 28


function fibonacci(n, string = "", numberA = 1, numberB = 1, i = 1) {
    var numberC;

    if (i === 1) {
        string += '0 ';
    }

    if (i === 2) {
        string += `${numberA} `;
    }

    if (i === 3) {
        string += `${numberB} `;
    }

    if (i >= 4) {
        numberC = numberA + numberB;
        numberA = numberB;
        numberB = numberC;
        string += `${numberC} `;
    }
    if (i < n) {
        i++;
        string = fibonacci(n, string, numberA, numberB, i)
    }
    return string;
}
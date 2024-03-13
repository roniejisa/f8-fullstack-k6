function reverseNumber(number) {
    var index = 0;
    var numberToString = number.toString();
    var reverseNumber = '';
    while (true) {
        reverseNumber += numberToString[numberToString.length - 1 - index];
        index++;
        if (!numberToString[index]) {
            break;
        }
    }
    return reverseNumber;
}

console.log(reverseNumber(12345));
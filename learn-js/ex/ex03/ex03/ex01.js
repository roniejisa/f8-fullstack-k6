function convertNumberToText(number, length = 0) {
    var string;
    switch (number) {
        case '9':
            string = "chín";
            break;
        case "8":
            string = "tám";
            break;
        case "7":
            string = "bảy";
            break;
        case "6":
            string = "sáu";
            break;
        case "5":
            string = "năm";
            break;
        case "4":
            string = "bốn";
            break;
        case "3":
            string = "ba";
            break;
        case "2":
            string = "hai";
            break;
        case "1":
            if (length == 2) {
                string = "mười";
            } else {
                string = "một";
            }
            break;
        case "0":
            if (length == 1) {
                string = "mươi";
            } else {
                string = "không";
            }
            break;
    }
    return string;
}

function numberToVietNamString(number) {
    if (number < 0 || number > 9999) {
        return;
    }
    var stringNumber = number.toString();
    var length = stringNumber.length;
    var index = 0;
    var result = '';
    while (true) {
        var numberToString = convertNumberToText(stringNumber[0], stringNumber.length);
        if (index == 0) {
            numberToString = numberToString.charAt(0).toUpperCase() + numberToString.slice(1);
        }
        result += numberToString;

        if (stringNumber.length >= 4) {
            result += " ngàn";
        }
        if (stringNumber.length === 3) {
            result += " trăm"
        }

        result += " ";
        stringNumber = stringNumber.slice(1);
        index++;
        if (length === index) {
            break;
        }
    }
    return result;
}
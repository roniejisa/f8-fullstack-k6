var fullName = '\n phạm minh hiếu';
fullName = fullName.trim();
var position = fullName.indexOf(' ');
var result = '';
while (position !== -1) {
    var string = fullName.slice(0, position);
    var charAtString = string.charAt(0);
    result += charAtString.toUpperCase() + string.slice(1) + ' ';
    fullName = fullName.slice(position + 1);
    position = fullName.indexOf(' ');
}
result += fullName.charAt(0).toUpperCase() + fullName.slice(1);
console.log(result);
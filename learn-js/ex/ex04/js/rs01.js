var content = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
document.write(content);
var OldContent = '';
var index = 0;
var result;
function reset() {
    document.body.innerHTML = '';
    var firstPosition = content.indexOf(' ');
    if (firstPosition == -1) {
        var firstString = content;
        content = '';
    } else {
        var firstString = content.slice(0, firstPosition);
        content = content.slice(firstPosition + 1);
    }
    result = ((index == 0 ? '' : OldContent) + '<span style="color:red">' + firstString + ' ' + '</span>' + content);
    OldContent += (firstString + ' ');
    index++;
    document.write(result)
    if (firstPosition == -1) {
        clearInterval(a);
        result = '';
        index = 0;
        content = OldContent;
        OldContent = '';
        a = setInterval(reset, 1000);
    }
}
var a = setInterval(reset, 1000)
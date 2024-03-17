var content = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem minima, consectetur dolorum maiores aspernatur excepturi porro? Vero accusamus ipsam in esse impedit cupiditate qui blanditiis possimus aliquid? Repellat quos possimus, nam porro suscipit architecto, voluptates aperiam corrupti deleniti obcaecati repellendus a, cum ex vitae ad similique quae voluptatum. Voluptatibus asperiores sint unde assumenda tenetur, eius aperiam exercitationem suscipit nobis ut. Voluptatum assumenda quia vitae quidem, in maxime dolorem veritatis aliquid dolorum tenetur, itaque, modi quae ipsam beatae porro pariatur non! Veritatis aliquam dolor vero tempore ab impedit doloremque sed sint, consectetur sapiente repellendus corrupti cum quo eveniet quod non pariatur?';
document.write(content);
var OldContent = '';
var index = 0;
var result;
var a = setInterval(function () {
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
    }
}, 100)
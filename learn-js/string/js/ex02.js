var content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam neque deserunt velit porro corrupti nostrum error ex. Esse perspiciatis accusamus voluptatum quod nihil fuga a. Architecto cumque Hiếu quas praesentium reprehenderit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam neque Hiếu deserunt velit porro corrupti nostrum Hiếu error ex. Esse perspiciatis accusamus voluptatum quod nihil fuga a. Architecto cumque quas praesentiumHiếu reprehenderit?`;

var keyword = prompt("Nhập từ khóa muốn tìm?");

var positionOfKeyWord = content.toLowerCase().indexOf(keyword.toLowerCase());
var count = 0;
var result = "";
while (positionOfKeyWord != - 1) {
    count++;
    var string = content.slice(positionOfKeyWord, positionOfKeyWord + keyword.length);
    var contentBefore = content.slice(0, positionOfKeyWord);
    result += `${contentBefore}<span style="background:red">${string}</span>`;
    content = content.slice(positionOfKeyWord + string.length);
    positionOfKeyWord = content.toLowerCase().indexOf(keyword.toLowerCase());
}
result += content;

var html = `<p>Tìm kiếm với từ khóa <b>${keyword}</b></p>
<p>${result}</p>
<p>Đã tìm thấy ${count} kết quả với từ khóa <b>${keyword}</b></p>`
document.write(html);
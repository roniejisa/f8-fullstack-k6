var soBangCuuChuong = 10;

for (var i = 1; i <= 10; i++) {
    document.write("Bảng cửu chương " + i);
    for (var j = 1; j <= 10; j++) {
        document.write("<br> ");
        document.write(`${i} x ${j} = ${i * j}`)
    }
    document.write('<br><br>')
}
n = 5;
var count = 1;
for (i = 1; i <= n; i++) {
    for (var a = 1; a <= i; a++) {
        document.write(count + " ");
        count++;
    }
    document.write("<br>")
}
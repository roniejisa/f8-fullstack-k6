
    let a = 1;
    let b = 8;
for (var i = 1; i <= 8; i++) {
    let isWhite = false;
    if (i % 2 === 0) {
        isWhite = true
    }
    if (i === 1) {
        document.write('<span class="empty"></span>');
        for (k = 1; k <= 8; k++) {
            if (i === 1 && k === 1) {
                document.write('<span class="text">A</span>');
            }
            if (i === 1 && k === 2) {
                document.write('<span class="text">B</span>');
            }
            if (i === 1 && k === 3) {
                document.write('<span class="text">C</span>');
            }
            if (i === 1 && k === 4) {
                document.write('<span class="text">D</span>');
            }
            if (i === 1 && k === 5) {
                document.write('<span class="text">E</span>');
            }
            if (i === 1 && k === 6) {
                document.write('<span class="text">F</span>');
            }
            if (i === 1 && k === 7) {
                document.write('<span class="text">G</span>');
            }
            if (i === 1 && k === 8) {
                document.write('<span class="text">H</span>');
            }

        }
        document.write('<span class="empty"></span>');
        document.write('<br>')
    }
    document.write('<span class="number">'+a+'</span>');
    for (j = 1; j <= 8; j++) {
        if (isWhite) {
            if (j % 2 === 0) {
                document.write('<span class="white"></span>');
            } else {
                document.write('<span class="black"></span>');
            }
        } else {
            if (j % 2 === 0) {
                document.write('<span class="black"></span>');
            } else {
                document.write('<span class="white"></span>');
            }
        }
    }
    document.write('<span class="number">'+b+'</span>');
    document.write('<br>')
    if (i === 8) {
        document.write('<span class="empty"></span>');
        for (h = 1; h <= 8; h++) {
            if (i === 8 && h === 1) {
                document.write('<span class="text">A</span>');
            }
            if (i === 8 && h === 2) {
                document.write('<span class="text">B</span>');
            }
            if (i === 8 && h === 3) {
                document.write('<span class="text">C</span>');
            }
            if (i === 8 && h === 4) {
                document.write('<span class="text">D</span>');
            }
            if (i === 8 && h === 5) {
                document.write('<span class="text">E</span>');
            }
            if (i === 8 && h === 6) {
                document.write('<span class="text">F</span>');
            }
            if (i === 8 && h === 7) {
                document.write('<span class="text">G</span>');
            }
            if (i === 8 && h === 8) {
                document.write('<span class="text">H</span>');
            }
        }
        document.write('<span class="empty"></span> ');
    }
    a++;
    b--;
}
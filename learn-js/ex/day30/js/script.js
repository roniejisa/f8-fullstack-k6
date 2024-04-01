var buttonShow = document.querySelector('.file-action .show');
var listAction = document.querySelector('.list-action');
var pdfEl = listAction.querySelector('.savePdf');
var txtEl = listAction.querySelector('.saveTxt');
var newFile = listAction.querySelector('.new-file');
var listActionToolbar = document.querySelector('.actions');
var character = document.querySelector('.character span');
var word = document.querySelector('.word span')
var colorCurrent = null;
const editor = document.querySelector('.editor');
Array.from(listActionToolbar.children).forEach(item => {
    if (item.localName === "button") {
        item.addEventListener('click', function () {
            document.execCommand(item.getAttribute('type'), false, null);
            editor.focus();
        })
    }

    if (item.localName === 'input') {
        item.addEventListener('input', function () {
            colorCurrent = item.value;
            document.execCommand('foreColor', false, colorCurrent);
            editor.focus();
        })
    }
})
newFile.addEventListener('click', function () {
    editor.innerText = '';
})
console.log(window.innerWidth, window.innerHeight);
pdfEl.addEventListener('click', async function () {
    editor.style.minHeight = editor.scrollHeight + 'px';
    var opt = {
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 1 },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { format: [window.innerWidth, window.innerHeight] }
    };
    await html2pdf().from(editor.innerHTML).set(opt).save();
    editor.style.minHeight = '';
})

txtEl.addEventListener('click', function () {
    const element = document.createElement('a');
    const file = new Blob([editor.innerText], {
        type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = 'text.txt';
    element.click();
})

buttonShow.addEventListener('click', function () {
    if (listAction.classList.contains('active')) {
        listAction.classList.remove("active");
    } else {
        listAction.classList.add("active");
    }
})

editor.addEventListener('keyup', function (event) {
    character.textContent = editor.innerText.length;
    word.textContent = editor.innerText.length ? editor.innerText.split(' ').length : 0;
})

editor.focus();
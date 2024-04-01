var target = document.querySelector('.list');

var elementDrag = null
var listItem = document.querySelectorAll('.list-item');
target.addEventListener('dragover', function (event) {
    event.preventDefault();
})
function refresh() {
    var listItem = document.querySelectorAll('.list-item');
    var itemIndex = 1;
    var moduleIndex = 1;
    listItem.forEach(function (item) {
        if (item.querySelector('span')) {
            var text = item.querySelector('span').innerText;
        } else {
            var text = item.innerText;
        }
        if (item.classList.contains('active')) {
            item.innerHTML = `Module ${moduleIndex}: <span>${text}</span>`;
            moduleIndex++;
        } else {
            item.innerHTML = `Bài ${itemIndex}: <span>${text}</span>`;
            itemIndex++;
        }
    });
}
refresh();

listItem.forEach(function (item) {
    item.addEventListener('dragstart', (event) => {
        if (event.target.classList.contains('list-item')) {
            elementDrag = event.target;
        } else {
            elementDrag = event.target.closest('.list-item');
        }
        elementDrag.style.opacity = "0.4";
    })

    item.addEventListener('dragover', (event) => {
        var itemCurrent = null;
        if (event.target.classList.contains('list-item')) {
            itemCurrent = event.target;
        } else {
            itemCurrent = event.target.closest('.list-item');
        }
        var height = itemCurrent.clientHeight;
        var rate = height / 2;
        if (event.offsetY < rate) {
            itemCurrent.parentElement.insertBefore(elementDrag, itemCurrent)
        } else if (itemCurrent.nextElementSibling) {
            itemCurrent.parentElement.insertBefore(elementDrag, itemCurrent.nextElementSibling);
        } else {
            itemCurrent.parentElement.insertBefore(elementDrag, itemCurrent.nextElementSiblings);
        }
    })

    item.addEventListener('dragend', (event) => {
        if (elementDrag) {
            elementDrag.style.opacity = 1;
            elementDrag = null;
            refresh();
        }
    })
})
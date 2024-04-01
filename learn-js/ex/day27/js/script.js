var listItem = document.querySelectorAll('tbody tr');
var cart = document.querySelector('.cart');
var cartData = [];
listItem.forEach(function (trEl) {
    var button = trEl.querySelector('button');
    var inputEl = trEl.querySelector('input');
    inputEl.addEventListener('change', function () {
        inputEl.value = Math.abs(+inputEl.value);
    })
    button.addEventListener('click', function () {
        var listTr = trEl.children;
        var id = listTr[0].innerText;
        var name = listTr[1].innerText;
        var price = listTr[2].innerText;
        var value = inputEl.value;
        if (value.trim() === '' && +value.trim() <= 0) {
            return false;
        }
        var cartData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        var index = cartData.findIndex(item => +item.id === +id);
        if (index === -1) {
            var itemData = {};
            itemData.id = id;
            itemData.value = +value;
            itemData.name = name;
            itemData.price = +price;
            cartData[cartData.length] = itemData;
        } else {
            cartData[index].value = +cartData[index].value + +value;
        }
        localStorage.setItem('cart', JSON.stringify(cartData));
        renderData();
    })
})

function renderData() {
    var cartData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    var total = cartData.reduce(function (total, item) {
        total += item.value * item.price;
        return total;
    }, 0)
    var quantity = cartData.reduce(function (total, item) {
        total += item.value;
        return total;
    }, 0)

    if (cartData.length === 0) {
        cart.innerHTML = '<p>Không có sản phẩm nào</p>'
    } else {
        const div = document.createElement('div');
        const buttonDeleteAll = document.createElement('button');
        buttonDeleteAll.innerText = "Xóa tất cả";
        buttonDeleteAll.addEventListener('click', function () {
            localStorage.setItem('cart', JSON.stringify([]));
            renderData();
        });
        var table = document.createElement('table');
        table.classList.add('table');
        table.setAttribute('cellpadding', 5);
        table.setAttribute('cellspacing', 0);
        table.setAttribute('border', 1);
        table.innerHTML = `<thead>
            <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Xóa</th>
            </tr>
        </thead>`;
        var tbodyEl = document.createElement('tbody');
        var tfootEl = document.createElement('tfoot');
        
        cartData.forEach(function (item, index) {
            var inputEl = document.createElement('input');
            var trEl = document.createElement('tr');
            var tdSTT = document.createElement('td');
            tdSTT.innerText = item.id;
            var tdName = document.createElement('td');
            tdName.innerText = item.name;
            var tdPrice = document.createElement('td');
            tdPrice.innerText = item.price;
            var tdQuantity = document.createElement('td');
            inputEl.value = item.value;
            var tdAmount = document.createElement('td');
            tdAmount.innerText = item.value * item.price;
            var tdDelete = document.createElement('td');
            var button = document.createElement('button');
            button.innerText = "Xóa";
            tdDelete.append(button);
            tdQuantity.append(inputEl);
            trEl.append(tdSTT, tdName, tdPrice, tdQuantity, tdAmount, tdDelete);
            tbodyEl.append(trEl);
            inputEl.addEventListener('change', function () {
                cartData[index].value = Math.abs(inputEl.value);
                if (cartData[index].value === 0 || !cartData[index].value) {
                    delete cartData.splice(index, 1);
                }
                localStorage.setItem('cart', JSON.stringify(cartData));
                renderData();
            })

            button.addEventListener('click', function () {
                if (confirm('Bạn có muốn xóa sản phẩm này không?')) {
                    delete cartData.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(cartData));
                    renderData();
                }
            })
        })

        tfootEl.innerHTML = `
            <tr>
                <td colspan="3">Tổng</td>
                <td>${quantity}</td>
                <td colspan="2">${total}</td>
            </tr>
        `
        table.append(tbodyEl,tfootEl);
        div.append(table,buttonDeleteAll);
        cart.innerHTML = '';
        cart.append(div);
    }
}
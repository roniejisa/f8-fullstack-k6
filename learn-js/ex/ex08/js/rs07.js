var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        children: [
            {
                id: 4,
                name: "Chuyên mục 2.1",
            },
            {
                id: 5,
                name: "Chuyên mục 2.2",
                children: [
                    {
                        id: 10,
                        name: "Chuyên mục 2.2.1",
                    },
                    {
                        id: 11,
                        name: "Chuyên mục 2.2.2",
                    },
                    {
                        id: 12,
                        name: "Chuyên mục 2.2.3",
                    },
                ],
            },
            {
                id: 6,
                name: "Chuyên mục 2.3",
            },
        ],
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        children: [
            {
                id: 7,
                name: "Chuyên mục 3.1",
            },
            {
                id: 8,
                name: "Chuyên mục 3.2",
            },
            {
                id: 9,
                name: "Chuyên mục 3.3",
            },
        ],
    },
]

function renderChild(arrayData = [], listCategory, prefix = '', parent = 0, level = 0) {
    level++;
    listCategory.forEach(function (category) {
        if (category['children']) {
            arrayData.concat(renderChild(arrayData, category['children'], prefix, category.id, level));
        } else {
            if (parent) {
                category.parent = parent;
            }
            delete category['children'];
            for (var i = 0; i < level; i++) {
                category.name = prefix + category.name;
            }
            arrayData.push(category);
        }
    })
    return arrayData;
}

function renderParent(data) {
    var array = [];
    data.forEach(function (category) {
        var childrenArr = category['children'];
        delete category['children'];
        array.push(category);
        if (childrenArr) {
            var arrayChild = renderChild([], childrenArr, prefix = "--|", category.id);
            array = array.concat(arrayChild);
        }
    })
    return array;
}
var newCategory = renderParent(categories);

document.write(`<select>${newCategory.map(function (optionData) {
    return `<option>${optionData.name}</option>`
}).join('')}</select>`)
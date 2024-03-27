var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
        parent: 0,
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        parent: 0,
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        parent: 0,
    },
    {
        id: 4,
        name: "Chuyên mục 2.1",
        parent: 2,
    },
    {
        id: 5,
        name: "Chuyên mục 2.2",
        parent: 2,
    },
    {
        id: 6,
        name: "Chuyên mục 2.3",
        parent: 2,
    },
    {
        id: 7,
        name: "Chuyên mục 3.1",
        parent: 3,
    },
    {
        id: 8,
        name: "Chuyên mục 3.2",
        parent: 3,
    },
    {
        id: 9,
        name: "Chuyên mục 3.3",
        parent: 3,
    },
    {
        id: 10,
        name: "Chuyên mục 2.2.1",
        parent: 5,
    },
    {
        id: 11,
        name: "Chuyên mục 2.2.1.1",
        parent: 10,
    }, {
        id: 12,
        name: "Chuyên mục 2.2.1.1.1",
        parent: 11,
    },
];

var newCategories = [];

categories.forEach(category => {
    var arrIndex = getRecursive(newCategories, category.parent);
    delete category['parent'];
    if (arrIndex.length === 0) {
        newCategories.push(category);
    } else {
        var current = null;
        arrIndex.forEach(function (index, i) {
            if (i == 0) {
                current = newCategories[index];
            }
            if (i > 0) {
                current = current['children'][index];
            }
        })
        if (!current['children']) {
            current['children'] = [];
        }
        current['children'].push(category);
    }
})

function getRecursive(data, value) {
    return data.reduce(function (arrIndex, prev, index) {
        if (+prev.id === +value) {
            arrIndex.push(index);
        } else if (prev['children']) {
            var dataIndexChild = getRecursive(prev['children'], value);
            if (dataIndexChild.length > 0) {
                arrIndex.push(index);
                dataIndexChild.forEach(index => {
                    arrIndex.push(index);
                });
            }
        }
        return arrIndex;
    }, []);
}

console.log(newCategories);
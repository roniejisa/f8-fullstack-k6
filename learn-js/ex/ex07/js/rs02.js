const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];


function createCustomers(array){
    var newArray = array.sort(function(item, item2){
        return item.age - item2.age;
    })
    return newArray.reduce(function(initial, customer){
        var customerName = customer.name;
        var spaceFirstIndex = customerName.indexOf(' ');
        var spaceLastIndex = customerName.lastIndexOf(' ');
        var firstName = customerName.slice(0,spaceFirstIndex);
        var lastName = customerName.slice(spaceLastIndex + 1);
        customer['shortName'] = firstName +' '+ lastName;
        initial.push(customer);
        return initial;
    }, [])
}

console.log(createCustomers(customers));
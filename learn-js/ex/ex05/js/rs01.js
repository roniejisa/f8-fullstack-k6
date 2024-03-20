var a = [6,4,1000,37,8,9,6];

var min = a[0];
var max = 0;
for(var i = 0; i< a.length; i++){
    if(max < a[i]){
        max = a[i]
    }
    if(min > a[i]){
        min = a[i]
    }
}

console.log(min)
console.log(max)
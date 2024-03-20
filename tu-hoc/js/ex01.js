var height = window.innerHeight;
console.log(height);
var numberPage = 5;
var heightTotal = numberPage * height; 
for (var i = 0; i < numberPage; i++) {
    document.body.insertAdjacentHTML('beforeend', `<div style="height: ${height}px;background-color:${`rgb(${Math.round(Math.random() * 255 - i)},${Math.round(Math.random() * 255 - i)},${Math.round(Math.random() * 255 - i)})`}"></div>`);
}
window.addEventListener("wheel", (event) => {
    console.log(event);
});

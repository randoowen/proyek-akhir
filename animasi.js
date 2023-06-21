let a = window.location
console.log(a);
let menu = document.getElementsByClassName("header-list")[0]
console.log(menu);
let menuItems = menu.getElementsByTagName("a")
console.log(menuItems);
for (i = 0; i < menuItems.length; i++) {
    menuItems[i].innerHTML
    console.log(menuItems[i].innerHTML)
}
if (a.pathname == "/product.html") {
    menuItems[0].style.color = "orange"
}
if (a.pathname == "/store.html") {
    menuItems[1].style.color = "orange"
}
if (a.pathname == "/contact.html") {
    menuItems[2].style.color = "orange"
}

let var1 = {a:100}
let var2 = var1
console.log(var2)

var1.a = 200
var1.b = 300
console.log(var1)

var1.c = var1 = {c:400}

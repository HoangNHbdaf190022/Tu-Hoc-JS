console.log("Hello");
// is the same as
window.console.log("Hello");

//hàm và biến cục bộ sẽ được khai báo bằng var
var a = 5
console.log(window.a) //-> 5 sẽ thành thuộc tính cục bộ
//thử khai báo bằng let xem
let  b = 6
console.log(window.b) //-> undefined
//ngoài var thì delare bằng window cũng được
window.hello = {
    name: 'Hoang'
}
console.log(hello.name  )
console.log(window.hello.name)  //tất cả đều bằng Hoang

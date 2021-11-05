/* 
  Về phần config sẽ được chia làm 2 loại: Lấy thông tin và thay đổi thông tin
  1. để lấy thông tin thì 
  let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName)
  2. thay đổi thông tin thì qua bên index mà xem hoặc ví dụ ở dưới :3
*/

//1) get full infomation
var hello = {
  name: 'Hoang dep trai'
}
var descriptor = Object.getOwnPropertyDescriptor(hello, 'name')
console.log(descriptor)
  
// 2) Configure
// Non-writable
let userr = {
    name: "hoang"
}
Object.defineProperty(userr, 'name', {
    writable: false // when displaying: 'hoang' cause writable = false so can not edit
})
userr.name = 'John'
console.log(userr)

// Errors appear only in strict mode!
//Here’s the same example, but the property is created from scratch:

let ngdung = {}
Object.defineProperty(ngdung, 'name', {
    value: 'Don',
      // for new properties we need to explicitly list what's true
      enumerable: true,
      configurable: true
})
ngdung.name = 'Hoang' // don't print
console.log(ngdung.name); // still print Don

// non-enumerable: use for...in to list properties
let users = {
    name: "John",
    toString() {
      return this.name;
    }
  };
  
  // Thực hiện bước dưới thì chạy được rồi - bây giờ tôi không muốn cho nó liệt kê nữa :)
  Object.defineProperty(users, 'toString',{
      enumerable: true // nếu không thích hiển thị toString thì đổi thành false
  })

    // By default, both our properties are listed:
    for (let key in users) 
    console.log(key); // name, toString

    console.log(Object.keys.users); // name

// non- configure
let xinchao = {
    name: 'Hoang'
}
Object.defineProperty(xinchao, 'name', {

    configurable: true
    /* writable: false,
      configurable: false */
})
xinchao.name = 'lan'
console.log(xinchao) // ban đầu thì in ra Hoang, chừ in ra lan vì configurable là true, để config cứng luôn thì làm như comment bên dưới
delete xinchao.name



var user = {
    name: 'Hoang',
    age: 20,
    add: 'Nghe An',
    toString(){
        return `Ten la: ${user.name}, ${this.age} tuoi, que o ${user.add}` //this. hay user. cung duoc
    }
}
console.log(user)                       //trả về object gồm toString
console.log(user.toString())            //trả về toString

//===============  JSON.stringify  =======================//
var stringify = JSON.stringify(user)
console.log(typeof user)                //bản chất nó là object
console.log(typeof stringify)           //sau khi stringify thì thành chuỗi
console.log(stringify)

//===============  JSON.parse  =======================//

var parse = JSON.parse(stringify)       //biến thằng trên kia quay về làm object
console.log(typeof stringify)           //từ chuỗi thành object rồi
console.log(typeof parse)               //chắc chắn là object rồi
console.log(parse)
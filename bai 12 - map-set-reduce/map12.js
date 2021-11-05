var Subject = [
    {   id: 1,
        name: 'Toan',
        price: 100
    },
    {   id: 2,
        name: 'Van',
        price: 200
    },
    {   id: 3,
        name: 'Anh',
        price: 150
    },
    {   id: 4,
        name: 'Tin',
        price: 100
    },
    {   id: 5,
        name: 'Dia Li',
        price: 250
    },
];

//dùng index và value để lấy chỉ số index và value
var newSub = Subject.map((value, index)=>{
    console.log(index, value)
})
// bài toán bây giờ là tôi muốn nó tất cả value đều hiển thị là Mon: Toan, Anh v.v, và Gia: 100, 200 v.v
var change = function(Subject){
    // mình sẽ trả về những gì mà mình cần thay đổi
    return{
        id: Subject.id,
        name: `Mon: ${Subject.name}`,
        price: `Gia: ${Subject.price}`
    }
}
var display = Subject.map(change)
console.log(display) //không thể console log thẳng thằng change được, phải map

//Chỗ này tuy có set nhưng chưa phải là set chúng ta nói đến đâu
var map = new Map(); //khởi tạo 1 Map là map

// map.set(key, value) -> lưu trữ value bằng key
map.set('Hoang', 'huy') // trả về string
map.set(20, 'so 20')    // trả về number
map.set(true, 'bu lừn') // trả về boolean

// map.get(key) -> get key và nó sẽ trả về value
console.log(map.get('Hoang')) // trả về 'huy'
console.log(map.get(20))      // trả về 'so 20'
console.log(map.get(true))    // trả về 'bu lừn'

// map.has(key) – returns true if the key exists, false otherwise
console.log(map.has('Hoang')) // trả về true
console.log(map.has(15))      // trả về false
console.log(map.has(true))    // trả về true

// map.delete(key) – removes the value by the key
console.log(map.delete(21))   // trả về false
console.log(map.delete(20))   // trả về true
console.log(map.get(20))      // undefine là ok rồi nhé

// map.size – trả về số phần tử hiện tại
console.log(map.size)         // lưu ý: size chứ không phải size()

// map.clear() – xóa tất cả mọi thứ trong map.
console.log(map.clear())
console.log(map)              // không có gì nữa hết

//============================  use objects as keys  ===================================//

// Map còn có thể sử dụng objects để làm keys

let alo = {name: 'Hoang'}     // Object alo

let newMap = new Map()        // cho 1 map mới là newMap
newMap.set(alo, 'xin chao cac ban')
console.log(newMap.get(alo))

//==========================  Iteration over Map =====================================//
// Vong lặp trong Map -  dùng for...of & foreach

/* Đối với cái này sẽ có 3 phương thức 
 .keys() -> chỉ lấy key
 .values() -> chỉ lấy value
 .entries() -> lấy cả 2 luôn */

let users = new Map([
    ['Hoàng', 20],
    ['Huy', 30],
    ['Đồng', 40]
]);
// lấy keys
 for(let i of users.keys()){
    console.log('Cac key la: ' + i)
 }
 // lấy values
 for(let i of users.values()){
    console.log('Cac value la: ' + i)
 }// lấy entries
 for(let i of users.entries()){
    console.log(i)
 }
// dùng foreach thì nso sẽ không in ra mảng nữa, nhưng mà đẹp chán :v
 users.forEach((value, key, map) =>{
     console.log(`${key} - ${value} tuổi`)
 })




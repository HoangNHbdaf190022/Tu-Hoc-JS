/*
Its main methods are:
new Set (có thể lặp lại) - tạo set và nếu một đối tượng  lặp được cung cấp (thường là một mảng), thì sao chép các value từ nó vào set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
*/

let users = new Set();

let name1 = {name: 'Hoang'};
let name2 = {name: 'Huy'};
let name3 = {name: 'Dong'};

// Add() - add rồi trả về chính nó - chính là cái value luôn
users.add(name1);
users.add(name2);
users.add(name3);

//size
console.log(users.size)         //-> 3

//for...of lấy value name
for(let i of users){
    console.log(i.name)         //ra đúng cả 3 đứa
}

// Kiểm tra có value hay không
console.log(users.has(name1))   //trả về true

// Delete 1 value
console.log(users.delete(name1))
console.log(users.name1)        //Ok đã bay màu

// Xóa sạch
users.clear()
console.log(users)              //bay màu, sizre = 0

//==========================  Iteration over Set  ================//
// We can use for..of hoặc foreach 
let hoaQua = new Set(['Le', 'Man', 'Dao'])
console.log('Các loại hao quả:')
for(let i of hoaQua){
    console.log(i)
}

console.log('Hoa quả foreach:')
hoaQua.forEach((value, valueAgain, set) => {
    console.log(value) //thích in thằng nào thì in
})

let john = { name: "John" };

let array = [ john ];

john = null; // overwrite the reference
console.log(array[0])
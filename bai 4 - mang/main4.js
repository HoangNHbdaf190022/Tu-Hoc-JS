//thay vì
var a = 'Js'
var b = 'PHP'
var c = 'C++'
//thì
var languages = ['Js', 'PHP', 'C++']
console.log(languages)


//--POP : Xóa đi 1 phần tử cuối mảng rồi trả về, nhưng không thực sự làm những p.tử đó biến mất
console.log(languages.pop()) //loại C++ ra khỏi mảng và trả về
console.log(languages.pop()) //loại PHP ra khỏi mảng và trả về
console.log(languages.pop()) //loại Js ra khỏi mảng và trả về
console.log(languages.pop()) //khi không còn p.tử nào nữa thì nó sẽ trả về undefine

console.log(languages) // => bây giờ còn đúng cái nịt

//--PUSH : Thêm 1 p.tử cuối mảng
var zzz = [1,2,3,4]
console.log(zzz.push(5)) 
console.log(zzz) // => 1,2,3,4,5

//--Shift : Ngược lại với POP, xóa 1 p.tử đầu mảng
var arr = [0,1,2,3,4]
console.log(arr.shift())
console.log(arr) // => 1,2,3,4

//-- Unshift : Trái với PUSH nó thêm ở đầu mảng
var Unshift = ['nguyen', 'huu', 'hoang']
console.log(Unshift.unshift('Toi la ')) // Độ dài bh là 4
console.log(Unshift) // => Toi la nguyen huu hoang

//--Splice hoặc Splicing: Xóa 1 hay nhiều phần tử SAU vị trí phần tử chỉ định
var phantu = ['anh', 'yeu', 'em', 'nhieu', 'vcl']
console.log(phantu.splice(2, 1)) // tại vị trí thứ 2 lấy 1 đơn vị
// console.log(phantu)
console.log(phantu.splice(0, 2)) // tại vị trí 2 lấy 2 dv
console.log(phantu) // => nhieu vcl

//--Concat() : Hợp nhất 2 array lại với nhau
// ví dụ bây giờ tôi ghép thằng Unshift với phantu lại với nhau nha
console.log(Unshift.concat(phantu)) // => ["Toi la ", "nguyen", "huu", "hoang", "anh", "yeu", "vcl"]



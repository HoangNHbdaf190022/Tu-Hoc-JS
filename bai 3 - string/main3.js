//--tạo mới 1 chuỗi
let fullName = new String('Nguyen Hoang')
console.log(fullName)

//--để biết đó là loại dữ liệu gì => typeOf
console.log(typeof fullName)
//--xem độ dài chuỗi
console.log(fullName.length)
//--nối chuỗi
console.log('Xin chào các bạn'
+ ' mình là Hoàng'
+ ' đang học tập tại Hà Nội')

//--Template String ES6
var n1 = 'Nguyen'
var n2 = ' Hoang'
//thay vì
console.log('Tôi là: ' + n1 + n2)
//thì
console.log(`Tôi là: ${n1}${n2}`) //lưu ý dấu nháy này là gần phím Esc

//--tìm index
var js = 'Xin chao cac ban '

console.log(js.indexOf('o'));
console.log(js.lastIndexOf('a'))

//--cắt chuỗi: thường là từ trái sang phải
console.log(js.slice(0, 3)) //hoặc 
console.log(js.slice(9))
//bây giờ thì cắt từ phải sang trái -3, -2, -1, 0
console.log(js.slice(-4, -1))

//--Replace()
console.log(js.replace('cac ban', 'ban toi'))
//thay thế tất cả chữ 'c' thành 88
console.log(js.replace(/c/g, 88))

//-- UpperCase() và LowerCase()
console.log(js.toUpperCase())
console.log(js.toLowerCase())

//--Trim() loại bỏ khoảng trắng ở 2 đầu
var leuleu = '  Hoc Js de di lam    '  
console.log(leuleu.trim())

//--Split()
var a = 'JavaScript, Java, C#'
console.log(a.split(', '))  //cứ là sau mỗi dấu ', ' thì cắt thành 1 chuỗi khác và lồng vào array [0: JavaScript, 1: Java, 2: C#]
console.log(a.split(''))  // :))
let chia = 'Hoang'; console.log(chia.split(''));

//--chartAt() -- lấy ra 1 kí tự nằm trong chuỗi đó
var b = 'alo, anh chao em'
console.log(b.charAt(10)) // => kí tự thứ 10 là 'h'

//--toFixed() : Làm tròn số
var PI = 3.14
console.log(PI.toFixed())   //kết quả bằng 3. Trường hợp trên 3.5 là nó làm tròn thành 4 luôn
//bây giờ làm tròn với số lớn hơn
var hoang = 2000.4512654
console.log(hoang.toFixed()) // kết quả thì vẫn là 2000 thôi. nhưng muốn lấy thêm số sau nữa thì sao :))
console.log(hoang.toFixed(2)) // như đã thấy thì nó sẽ lấy thêm 2 giá trị sau đó là 45 :v OK


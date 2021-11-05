var myInfo = {
    name: 'Hoang',
    age: 20,
    add: 'Nghe An'
}
// // bây giờ chúng ta thử thêm cặp key khác tên là "email"
myInfo.email = 'hoangnh@deptrai.com'
myInfo.hello = 'oi doi oi'

console.log(myInfo)
console.log(typeof myInfo)

// ** Object constructor **
function User(Fname, Lname, avt){
    this.Fname = Fname;
    this.Lname = Lname;
    this.avt = avt;
}

// cac doi tuong 
let user = new User('Nguyen', 'Hoang', 'avatar')
var admin = new User("Ten", "Tuoi", "avt")

// user.title = "Hello cac ban, minh la Hoang ne"
// admin.comment = "Hoang dep trai oi :D "
// mấy cái này cũng chỉ là thêm cặp key thôi

console.log(user)
console.log(admin)

//--Đối tượng Date()
var date = new Date()
console.log(date) // thời gian hiện tại

var ngay = date.getDate()
var thang = date.getMonth() + 1  // phải cộng thêm 1 vì tháng ở đây bắt đầu từ 0 - 11
var nam = date.getFullYear()

console.log(ngay)
console.log(thang)
console.log(nam)

// hoặc có thể lấy ra giờ, phút, giây

var gio = date.getHours()
var phut = date.getMinutes()
var giay = date.getSeconds()

console.log(gio)
console.log(phut)
console.log(giay)

// Lấy thời gian chuẩn chất lượng VN
console.log('Hôm nay là: ' + `${ngay}/${thang}/${nam}`)
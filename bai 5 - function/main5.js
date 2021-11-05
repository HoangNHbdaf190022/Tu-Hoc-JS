//--Như nào là một khối mã => dưới đây là 1 khối mã
function alo(){
    alert('aloooooooo')
}
// Khối lệnh này sẽ không được thực thi nếu không đc gọi => h thì call nó ra thôi
alo();


//--Truyển tham số
// Đầu tiên chúng ta hay triển khai như này đúng k?
function hello(){
    console.log('Có ai ở đây không?')
}
hello();

// Thử truyền tham số (alo) như thế này nhé
function holle(alo){
    console.log(alo)
}
holle('xin chào tất cả các bạn') // OK :))

//-- Đối tượng arguments
function hihi(){
    console.log(arguments)
}
hihi('nguyen', 'huu', 'hoang') // Nó sẽ trả về 3 tham số đã truyền Arguments(3) ["nguyen", "huu", "hoang" nó na ná như mảng 

//-- VÒNG LẶP FOR OF
function lala(){
    for(var para of arguments)
    console.log(para)
}
lala('Oi', 'Doi', 'Oi')

//--demo lung tung xiu
function demo(){
    var helloworld = ''
    for(var thamso of arguments){
        helloworld += `${thamso} ` // Nối chuỗi với các giá trị của thamso để in ra các tham số, vì sao mình dùng Template? đơn giản là thích thì dùng thôi
    }
    console.log(helloworld)
}
demo('Hoang', 'Huu', 'Nguyen')

//--return trong hàm -- return có thể trả về bất cứ dữ liệu gì
function cong(a, b){
    return a + b;
}

var kq = cong(2, 8)
console.log(kq)

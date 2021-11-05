// ta có for of để lấy các phần tử ra
var languages = [ 'Js','PHP','C#' ]
for(var val of languages){
    console.log(val) // hiển thị ra 3 ngôn ngữ trên
}

// ta có for of lấy ra từng chữ
var a = 'helloWorld'
for(var val of a){ console.log(val) }

// ta có 1 object như này
var inFo = {
    name: 'hoang',
    age: 20,
    add: 'NA'
}
// -- trả về một mảng Object key --
 console.log(Object.keys(inFo))
// -- trả về một mảng Object value --
console.log(Object.values(inFo))

// -- trả về một loạt values
// for(var key of inFo){
//     console.log(inFo[key]) // nếu ta làm theo giống for in thì nó sẽ lỗi nhé
// }
// -- với for of thì như này
for(var keyy of Object.keys(inFo)){
    console.log(inFo[keyy])
}

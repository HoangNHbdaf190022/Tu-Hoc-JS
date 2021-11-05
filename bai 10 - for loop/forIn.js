// for(var i = 0; i <= 100; i+=10){
//     console.log(i)
// }

//FOR IN
let inFo = {
    name: "hoang",
    age: 20,
    add: "NA"
}
for(let key in inFo){
    console.log(key) // hiển thị ra key
}
for(let val in inFo){
    console.log(inFo[val]) // hiển thị ra value
}
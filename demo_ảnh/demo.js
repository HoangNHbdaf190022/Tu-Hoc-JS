console.log('\nChào em, Lê Thị Hạnh!\n')
var fs = require('fs');

setTimeout(() => {
	console.log('Đang tải ảnh ...');
}, 500);
setTimeout(() => {
	console.log('LOADING ... 10%');
}, 1000);

setTimeout(() => {
	console.log('LOADING ... 20%');
}, 1500);
setTimeout(() => {
	console.log('LOADING ... 30%');
}, 2000);
setTimeout(() => {
	console.log('LOADING ... 70%');
}, 2500);
setTimeout(() => {
	console.log('LOADING ... 99%');
}, 3000);
setTimeout(() => {
	console.log('LOADING ... 100%');
}, 3000);

setTimeout(() => {
	fs.readFile('hoang.txt', 'utf-8', function (err, data) {
		if (err) throw err;
		var array = data.toString().split('\n');
		array.forEach((el, i) => {
			setTimeout(() => {
				console.log(array[i]);
			}, i * 200);
		});
	});
}, 4000);
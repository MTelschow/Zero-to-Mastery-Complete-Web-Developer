import fs from 'fs';

console.time('1');
const file = fs.readFileSync('./input.txt');

const data = file.toString().split('');

const result = data.reduce((total, char) => {
	if (char === '(') return total + 1;
	return total - 1;
}, 0);

console.log(result);
console.timeEnd('1');

console.time('2');
let currentFloor = 0;
for (let i = 0; i < data.length; i++) {
	if (currentFloor < 0) {
		console.log(i);
		console.timeEnd('2');
		break;
	}
	if (data[i] === '(') {
		currentFloor += 1;
	} else {
		currentFloor += -1;
	}
}

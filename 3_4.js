var o1 = { name : "kim", score : [1,2] };
var o2 = Object.assign({}, o1);

console.log(o1, o2, o1 === o2, o1.score === o2.score);
// { name: 'kim', score: [ 1, 2 ] } { name: 'kim', score: [ 1, 2 ] } false true

// o2.score.push(3);
// console.log(o1, o2, o1 === o2, o1.score === o2.score);
// { name: 'kim', score: [ 1, 2, 3 ] } { name: 'kim', score: [ 1, 2, 3 ] } false true

o2.score = o2.score.concat();
o2.score.push(3);
console.log(o1, o2, o1 === o2, o1.score === o2.score);
// { name: 'kim', score: [ 1, 2 ] } { name: 'kim', score: [ 1, 2, 3 ] } false false
var score = [1, 2, 3];
var a = score;
var b = score;


// 1억 줄의 코드


// score.push(4);
// [1, 2, 3, 4] [1, 2, 3, 4] [1, 2, 3, 4]


var score2 = score.concat(4);

console.log(score, score2, a, b);
// [1, 2, 3] [1, 2, 3, 4] [1, 2, 3] [1, 2, 3]
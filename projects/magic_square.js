var magic_square = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
];
var i=0;
var diagonal=2;
var d=0;
var d2=0;
while (i<magic_square.length){
    var j=0;
    var row_sum=0;
    var col_sum=0;
    while (j<magic_square[i].length){
        row_sum+=magic_square[i][j]
        col_sum+=magic_square[j][i]
        j++
    }
    d=d+magic_square[i][i]
    d2=d2+magic_square[i][diagonal]
    diagonal--
    i++
}
var row_col=(row_sum==col_sum);
var diagonal_=(d==d2);
// console.log(row_col)
// console.log(diagonal_)

if (row_col==diagonal_){
    console.log('It is a magic square')
}
else{
    console.log('It is not a magic square')
}

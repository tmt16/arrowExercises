// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }
let arr = [1, 2, 3, 4]

const double = arr.map(val => val * 2);

const double2 = arr.map((val) =>  {
    return val * 2;
});


let numbers = [1, 2, 3, 4];
// 1, 4, 9, 16
// 4, 16

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
      // 1, 4, 9, 16
    // });
    // var evens = squares.filter(function(square){
    //   return square % 2 === 0;
//     });
//     return evens;
//   }


const squareAndFindEvens = (numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0));


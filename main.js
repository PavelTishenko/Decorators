// var f = function sum(a, b){
//   return a + b;
// }

// function sumDecorator(func){
//   return function(){
//     let result = func.apply(this, arguments);
//     console.log(result);
//     //return result;
//   };
// }


//  // Розраховує час виконання функції
// function timeDecorator(func){
//     return function(){
//       let startTime = performance.now();
//       let result = func.apply(this, arguments);
//       let endTime = performance.now() - startTime;
//       console.log(`Виконання зайняло: ${endTime}`);
//       return result;
//     };
// }

// f = sumDecorator(f);
// f = timeDecorator(f);

// f(4, 5);

//  *********** DZ Source IT ************
// function work(a) {
//   /* ... */ // work - произвольная функция, один аргумент
// }

//Push in arr with decorators help
// function makeLoggingDecorator(func, log){
//   return function(a){
//     let pushing = log.push(a);
//     console.log(`Log is ok :) => ${pushing}` );
//     return func.call(this, a); 
//   };
// }



// let log = [];
// work = makeLoggingDecorator(work, log);
// work(1);
// work(2);
// console.log(log);

// function work(a, b) {
//  console.log( a + b ); // work - произвольная функция
// }

// function moreMakeLoggingDecorator(func, log){
//   return function(){
//     log.push([].slice.call(arguments));
//     return func.apply(this, arguments); 
//   };
// }
// let log = [];
// work = moreMakeLoggingDecorator(work, log);
// work(1, 2);
// work(4, 5);
// for (var i = 0; i < log.length; i++) {
//   var args = log[i]; // массив из аргументов i-го вызова
//   alert( 'Лог:' + args.join(',') );
// }

function f(x) {
  return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f){
  let cache = {};
  return function(a){
    if(typeof cache[a] === 'undefined'){
      cache[a] = f.call(this, a);
    }
    return cache[a];
  };
}

f = makeCaching(f);
var a, b;

a = f(1);
b = f(1);
console.log( a == b );

b = f(2);
console.log( a == b );
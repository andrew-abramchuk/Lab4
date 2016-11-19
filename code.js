
//----------------------------Сurrying------------------------------------------------------//

function curry(a) {
  return function (b) {
    // в этом вызове аргумент a заменён на переданное в функцию curry значение
    return a*b;
  };
}

var inc = curry(2);
alert("Результат: " + inc(5) +"; "+ inc(10) +"; "+ inc(3)); // Результат: 10; 20; 6

//--------------------------Fibonacci numbers----------------------------------------------//
// Witn recursion
function fibonacc1(n) {
  if (n === 0 || n === 1)
    return n;
  else
    return fibonacci(n - 1) + fibonacci(n - 2);
}
alert("Результат: " + fibonacc1(7)); // Результат: 13
// Without recursion
function fibonacci(n) {
  var mass = [];
  mass.push(1,1);
  for(var i =2 ; i < n ; i++){
      mass[i]= mass[i-1]+mass[i-2];
  }
  console.log(mass);
  return mass[n-1];
}
alert("Результат: " + fibonacci(8)); // Результат: 21
//--------------------------Fibonacci numbers with memoization----------------------------//

function memoized (fn, keymaker) {
   var lookupTable = {}, key;
   keymaker || (keymaker = function (args) {
      return JSON.stringify(args)
   });
   return function () {
      var key = keymaker.call(this, arguments);
      return lookupTable[key] || (
         lookupTable[key] = fn.apply(this, arguments)
      )
   }
}

var memoizedFibonacci = memoized( function (n) {
    var mass = [];
  mass.push(1,1);
  for(var i =2 ; i < n ; i++){
      mass[i]= mass[i-1]+mass[i-2];
  }
  console.log(mass);
  return mass[n-1];
});

alert("Результат: " + memoizedFibonacci (50)); // Результат: 12586269025

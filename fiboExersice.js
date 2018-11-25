//fibo using global variables.

const fib = function(term) {
  if(fibArray[term] == 0 || fibArray[term]){
    return fibArray[term];
  }
  fibArray.push(fib(term-1,fibArray)+fib(term-2,fibArray));
  return fib(term-2)+fib(term-1);
}

fibArray = [0,1];
console.log(fib(100));
console.log(fibArray);

//fibo using arguments.

const fib = function(term,fibArray=[0,1]) {
  if(fibArray[term] == 0 || fibArray[term]){
    return fibArray[term];
  }
  fibArray.push(fib(term-1,fibArray)+fib(term-2,fibArray));
  return fib(term-2,fibArray)+fib(term-1,fibArray);
}

console.log(fib(100));

//fibo using closure

const fibo = function(term) {
  fibArray = [0,1];
  return fib = function(term) {
    if(fibArray[term] == 0 || fibArray[term]) {
      return fibArray[term];
    }
    fibArray.push(fib(term-1)+fib(term-2));
    return fib(term-2)+fib(term-1);
  }
}

fibGenerator = fibo();
console.log(fibGenerator(100));

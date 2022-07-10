//Use callbacks to sum 2 numbers
function sumNumbers(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, sumNumbers) {
  return sumNumbers(num1, num2);
}

console.log(calc(2, 2, sumNumbers)); //sum debe estar sin () y sin argumentos porque estos son pasados en la función calc

//Run some code and let's wait for some time for that to execute
setTimeout(function () {
  console.log('Hola, Javascript');
}, 5000); ////The function is anounymous that's way it has a name

function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Oscar'); //This last argument will be the argument for our function

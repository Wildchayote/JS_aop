let temperatures;
let sum;
let meanTemp;

function getMeanTemp() {
    sum = 0;
    let res;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    res = sum / temperatures.length;
    console.log(res)
    return res
}
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
meanTemp = getMeanTemp()
console.log(`Mean Temperature: ${meanTemp}`)

// ############# RECURSION ##################
function factorial(n){
    return n>1 ? n*factorial(n-1): 1;
}
console.log(factorial(6))

// ############ RECURSION CONT. ##############
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function operation(func, first, second) {
    return func(first, second);
}

console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200

// ################### FUNCTION EXPRESSIONS #################
function operation(func, first, second) {
    return func(first, second);
}

let myAdd = function(a, b) {
    return a + b;
}

console.log(operation(myAdd, 10, 20)); // -> 30
console.log(operation(function(a, b) {
    return a * b;
}, 10, 20)); // -> 200

// ################### SYNCHRONOUS CALLBACKS ########################
let inner = function() {
    console.log('inner 1');
}

let demo = function() {
    console.log('Bashir 1');
}

let outer = function(callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
}
console.log('test 1');
outer(demo);
outer(inner);
console.log('test 2');

// ################ Asynchronous callbacks: setTimeout ##################
let innerF = function() {
    console.log('inner 1');
}
let Outer = function(callback) {
console.log('outer 1');
setTimeout(callback, 1000) /*ms*/;
console.log('outer 2');
}
console.log('test 1');
Outer(innerF);
console.log('test 2');

//  #################### setTimeout and setInterval functions #####################
let inner = function() {
    console.log('inner 1');
    }
    
    let OOuter = function(callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');
    
    setTimeout(function(){
        clearInterval(timerId);
    }, 5500);
    }
    
    console.log('test 1');
    OOuter(inner);
    console.log('test 2');

// ############### EVENTLISTENERS ######################
window.addEventListener("click", function() {
    let Sum = function(a,b){
        return a+b
        }
    console.log(Sum(22,34))
    console.log("clicked!");
});

// ############# ARROW FUNCTION ##############
let add = (a, b) => a + b;
console.log(add(10, 20)); // -> 30

let numbers = [50, 10, 40, 30, 20];
let sorted = numbers.sort((a, b) => b - a);
console.log(sorted); // [10, 20, 30, 40, 50]

let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;
console.log(sub(12, 10)); // -> 2
console.log(mult(10, 10.1)); // -> NaN

let factorial=(n) =>n > 1 ? n * factorial(n - 1) : 1;
console.log(factorial(5)); // -> 120

// ################# forEach () #########################
let names = ['Alice', 'Eve', 'John'];
function showName(element) {
    console.log(element);
}
names.forEach(showName); // -> Alice, Eve, John



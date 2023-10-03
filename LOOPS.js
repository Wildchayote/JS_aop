// ############ WHILE ... LOOP ################

let n = 0;
while(n < 91) {
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}

// #######################################
let isOver0 = false;
let counter0 = 0;

while (isOver0 != true) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver0 = continueLoop === true ? false : true;
    counter = counter + 1;
}

/*let isOver = false;
let counter = 1;
console.log(!isOver)
while (!isOver) {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
}*/

// ########### DO...WHILE LOOP ##################
do {
    code block
} while(condition);

let isOver;
let counter = 1;

do {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
} while (!isOver);

let condition = false;

// ######################## EXAMPLE #################################
while (condition) {
    console.log("A while loop iteration."); // never executed
}

do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);

// #############################################################
let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
        console.log(!isOver)
    } else {
        isOver = true;
        console.log(!isOver)
    }
}

for (let i = 0; i < names.length; i++){     /** for (let i = names.length-1; i >0; i--){ */
    console.log(names[i]);
}

// ################## FOR ... LOOP ##################

let numbers = [10, 40, 0, 20, 50];
for (let i = 0; i < numbers.length; i++) {
    let result;
    try {
        result = 1000/numbers[i];
    } catch (e) {
        result = e.message;
    }
    console.log(result);
}

// ##########################################
let values = [10, 30, 50, 100];

for (let i = 0; i < values.length; i++) {
    console.log(values[i]); // -> 10, 30, 50, 100
}

for (let i = values.length - 1; i > 0; i--) {
    console.log(values[i]); // -> 100, 50, 30, 10
}

for (let i = 0; i < values.length; i += 2) {
    console.log(values[i]); // -> 10, 50
}

// ################### FOR ... OF LOOP ##################
for (variable of array) { /** for variable in list: Python */
    block of code
}

let values = [10, 30, 50, 100];
let sum = 0;
for (let number of values) { /** for number in values: Python equivalent */
    sum += number;
}
console.log(sum); // -> 190

// ################################################
let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6}, 
    {name: "Lagos", population: 25.53e6}
];

for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}

// ################### FOR ... IN ###############
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    console.log(key); // -> name, surname, age, email
};
console.log(user.name); // -> Calvin
console.log(user[name]); // -> Calvin

for (let key in user) {
    console.log('${key} -> ${user[key]}');
};


// ########## TASKS ####################
let start = Number(prompt('Start: '));
let end = Number(prompt('End: '));
if (!Number.isNaN(start)&& !Number.isNaN(end)&&end>start){
    while(end>=start){
        console.log(end)
        end-=10
}
}else if (end<start){
    console.log('Error: '+start+' is greater than '+end+'. Try again!')
}else{
    console.log('Error: NaN. Try again!')
}
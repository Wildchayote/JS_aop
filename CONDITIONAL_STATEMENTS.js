let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 }, 
    {name: "Lagos", population: 25.53e6}
];
for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}











let user = prompt('Enter name: ');
let isFemale = true;
let state =prompt('Enter state: ');
let res = (user == 'Adeola' && isFemale == true && state == 'Ogun') ? 'Wife material - Marry her' : 'Don\'t marry her';
console.log(res)






//     }

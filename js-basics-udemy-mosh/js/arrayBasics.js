let elements = [1, 3];

// adding elements at the end of the array
elements.push(7, 5);

console.log(elements);

// adding elements to the beginning of an array
elements.unshift(-1, 0);

console.log(elements);


// adding elements to the middle 
elements.splice(2, 0, 'middle elememt');

console.log(elements);


// find the index of an element in an array
console.log(elements.indexOf(1));

elements.push(1);
console.log(elements.indexOf(1));
console.log(elements.lastIndexOf(1));

// just check if an element exists in the array
console.log(elements.includes(1));

// search the element after a specific position in an array

// Scenario - 
// Given is the guest list for some hypothetical function.
// Your task is to find if anyone with first name 'John' 
// is attending the function except the VIPs 
// whose names are listed as first 5 members in the guest list.

let namesOfGuests = [
    'John',
    'Dan',
    'Ricky',
    'Juan',
    'Kevin',
    'Narek',
    'Terry',
    'Peter',
    'John'
];
console.log(namesOfGuests.indexOf('John', 5));
// Inthe above function call, it is specified that the search 
// should skip first 5 elements and should proceed with the search
// from the 6th element (that is index number 5)  

// ==============================================

let courses = [
    {
        id: 101,
        name: 'JavaScript for Beginners'
    },
    {
        id: 102,
        name: 'JavaScript Basics'
    }
];

console.log(
    courses.includes(
        { id: 101, name: 'JavaScript for Beginners' }
    )
);

let matchingCourses = courses.find(function (element) {
    return element.name.toLowerCase().includes('javascript');
});

console.log('matchingCourses = ' + matchingCourses);

// same thing using arrow function
console.log(
    courses.find(course => course.name.toLowerCase().includes('javascript'))
);

//=================================

// removing element(s) from the array
let grades = ['C', 'B-', 'B+', 'A-', 'A', 'A+'];

// pop method: remove last element and returns it
const lastOne = grades.pop();
console.log(grades);
console.log(lastOne);


// shift method: removes element from start of an array
const firstOne = grades.shift();
console.log(grades);
console.log(firstOne);


// splice method: remove from a given index
grades.splice(1, 3);
console.log(grades);

// ==========================================

const numbers = [10,1,2,3,4,5,7,6,8,0,9];

let theTen = numbers.shift();

numbers.push(theTen);

console.log(numbers);

let splicedNumbers = numbers.splice(numbers.indexOf(0), 1);
numbers.unshift(...splicedNumbers);

console.log(numbers);

splicedNumbers = numbers.splice(numbers.indexOf(6), 1);
numbers.splice(6, 0, ...splicedNumbers);

console.log(numbers);

// ======================================

// emptying an array
// to remove all elements in an array

// 1 - to re-declare the variable as a new array
let someNumbers = [1, 3, 4];
someNumbers = [];
console.log(someNumbers);


// 2 - simply set the length to 0 so that the original array is truncated
let anotherSet = ['a', 'b', 'f', 'r'];
anotherSet.length = 0;
console.log(anotherSet);


let yetAnotherSet = ['a', 'b', 'f', 'r'];
yetAnotherSet.splice(0, yetAnotherSet.length);
console.log(yetAnotherSet);

// =================================

const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];

const combinedArray = a1.concat(a2);
console.log(combinedArray);

const firstCharAt = combinedArray.findIndex(elem => {
    return typeof elem === 'string'; 
});

console.log('first character found at index : ' + firstCharAt);

const secondPart = combinedArray.slice(firstCharAt, combinedArray.length);
console.log('the slice of the combined array only containing characters : ' + secondPart);

console.log('the slice of the combined array only containing characters : ' + 
    combinedArray.slice(-1 * firstCharAt)
);

console.log(combinedArray);


// ==================================

// iterating over array elements

let oems = ['Toyota', 'Nissan', 'Ford', 'FCA'];

oems.forEach((companyName, index) => console.log(index, companyName));

// ==================================

// joining array
const someMsg = '13,14,17,18,';
const prefList = ['McGill', 'Concordia', 'U of T', 'Northeastern'];
console.log(prefList.join(' --> '));
let splitParts = someMsg.split(',');
console.log(splitParts);

// ==================================

let restaurants = [
    {
        name: 'McDonald\'s'
    },
    {
        name: 'Tim Hortons'
    },
    {
        name: 'Burger King'
    },
    {
        name: 'Poulet Rouge'
    },
    {
        name: 'Mandy\'s'
    },
    {
        name: 'Seol Chako'
    },
    {
        name: 'Hot Star Noodles'
    }
];
restaurants.sort(function(a, b) {
    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1; 
    return 0;
});
console.log(restaurants);

// ============================

// filtering array elements according to some condition

let dishes = [
    {
        name: 'Fish Fillet',
        price: 12
    },
    {
        name: 'Chicken Nuggets',
        price: 8
    }, 
    {
        name: 'Egg Burger',
        price: 4
    },
    {
        name: 'Quarter Pounder Meal',
        price: 15
    },
    {
        name: 'Choco chip cookie',
        price: 1
    },
    {
        name: 'Apple Juice',
        price: 2.5
    }
];

let premiumDishes = dishes.filter(dish => {
    return dish.price > 5;
});
console.log(premiumDishes);

// scenario: all dishes that are premium dishes have a discount of 1 dollar

let promoMenu = dishes
    .filter(d => d.price > 5)
    .map(d => ({name: d.name, promoPrice: d.price - 3, price: d.price}));

console.log(dishes);
console.log(promoMenu);


// reducing array

const avgSaving = promoMenu.reduce((accumulator, currentValue) => {
    return accumulator + (100 * ((currentValue.price - currentValue.promoPrice) / currentValue.price));
}, 0) / promoMenu.length;

console.log(avgSaving);
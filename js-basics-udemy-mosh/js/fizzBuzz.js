function fizzBuzz(num) {
    if (typeof num !== 'number') return 'Not a number';
    let divByThree = !(num % 3) ? 'Fizz' : '';
    let divByFive = !(num % 5) ? 'Buzz' : '';
    let divByBoth = divByThree && divByFive  ? 'FizzBuzz' : '';
    return divByBoth || divByThree || divByFive || num;
}

console.log(
    '0 : ' + fizzBuzz(0)
);

console.log(
    '2 : ' + fizzBuzz(2)
);

console.log(
    '3 : ' + fizzBuzz(3)
);

console.log(
    '4 : ' + fizzBuzz(4)
);

console.log(
    '5 : ' + fizzBuzz(5)
);

console.log(
    '15 : ' + fizzBuzz(15)
);

console.log(
    'string : ' + fizzBuzz('15')
);

console.log(
    'booolean : ' + fizzBuzz(true)
);
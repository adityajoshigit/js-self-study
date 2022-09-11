function displayPrimeNumbers(limit) {
    for(let i = 2; i<limit; i++) {
        // console.log(i);
        let divisible = false;
        let count = 0;
        for(let j = 1; j <= i; j++) {
            if ((i % j) === 0) count++;
        }
        if (count === 2) console.log(i);
    }
}

displayPrimeNumbers(20);

let a = {
    firstName: 'Aditya',
    lastName: 'Joshi',
    school: {
        name: 'Concordia University',
        programs: [
            {
                title: 'MEng',
                credits: 45
            }
        ]
    }
};

let b = { ...a };

console.log(b);
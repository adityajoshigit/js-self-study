

function sumMultiples(limit, numbers) {
    for (let num of numbers) {
        let summation = 0;
        for(let i=0; (i*num)<=limit; i++) {
            summation += (i*num);
        }
        console.log('Sum of multiples of ' + num + ' upto ' + limit + ' = ' + summation);
    }
}

sumMultiples(10, [3, 9]);
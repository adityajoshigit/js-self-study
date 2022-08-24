function checkOddEven(limit) {
    let i = 0;
    while (i <= limit) {
        let nature = ((i % 2) === 0) ? 'Even' : 'Odd';
        console.log(
            i + ' : ' + nature
        );
        i += 1;
    }
}

checkOddEven(10);
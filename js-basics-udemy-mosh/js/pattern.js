function printStars(rows) {
    for(let i=1; i<=rows; i++) {
        let pattern = '';
        for(let j=1; j<=i; j++) {
            pattern = pattern + '*';
        }
        console.log(pattern);
    }
}

printStars(3);
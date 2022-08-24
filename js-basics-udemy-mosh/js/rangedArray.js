function arrayFromRange(start, end) {
    let arr = [];
    for(let i = start; i <= end; i++) 
        arr.push(i);
    return arr;
}

console.log(arrayFromRange(-8, 2));
function includesElement(arr, elem) {
    return arr.some(val => val === elem);
}

function except(master, valsToExclude) {
    let masterCopy = [];
    for(let val of master) {
        if (!valsToExclude.includes(val)) {
            masterCopy.push(val);
        }
    }
    console.log(masterCopy);
    return masterCopy;
}

function move(arr, index, offset) {
    console.log('given array', arr);
    if(index === offset === 0) return arr;
    if ((offset > arr.length)) {
        console.error('Invalid Offset');
        return;
    }
    const maxPossibleOffset = 
        offset > 0 ? (arr.length-1) - index
        : -index;
    if (
        (offset > 0) && (offset > maxPossibleOffset)
        || (offset < 0) && (offset < maxPossibleOffset)
    ) {
        console.error('Invalid Offset');
        return;
    }

    let modifiedArr = [...arr];
    const removedElem = modifiedArr.splice(index, 1);
    modifiedArr.splice(index + offset, 0, ...removedElem);

    console.log('modified array', modifiedArr);
    
    return modifiedArr;
}

function countOccurences(arr, searchElement) {
    let count = 0;
    for(const element of arr)
        if (element === searchElement) count += 1;
    return count;
}

function countOcc(arr, element) {
    return arr.filter(e => e === element).length;
}

function findLargest(arr) {
    if(arr.length === 0) return undefined;
    if(arr.length === 1) return arr[0];
    return arr.reduce(function (a, b) {
        if (a > b) return a;
        if (a < b) return b;
        return a;
    }, arr[0]);
}

// let res = includesElement([2,3,5,6], 4);
// let res = except([1,2,3,1,4,5,1,6], [1,6]);
// move([2,0,4,1,5,7,8], 3, 2);
// move([2,0,4,1,5,7,8], 3, -3);
// let res = countOcc([2,-8,4,-8,5,7,-8], -8);
let res = findLargest([0]);
console.log(res);



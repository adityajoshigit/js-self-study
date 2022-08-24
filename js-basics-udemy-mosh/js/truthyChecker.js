
function checkTruthyValue(arr) {
    let numberOfTruthyElems = 0;
    for (let element of arr) {
        if (element) numberOfTruthyElems++;
    }
    return numberOfTruthyElems;
}


const elements = ['John', 2, 0, '', NaN, undefined, true, false, null, -5.5];
console.log('Total TRUTHY elements = ' + checkTruthyValue(elements));
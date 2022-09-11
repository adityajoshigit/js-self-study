

function showProperties(obj) {
    for(let key in obj) {
        console.log(key + ' --> ' + obj[key]);
    }
}

showProperties(
    {
        'SOEN 6441' : 'B+',
        'SOEN 6431' : 'A+',
        'SOEN 6011' : 'B+',
        'COMP 6411' : 'B'
    }
);
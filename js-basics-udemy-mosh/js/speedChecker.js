// Speed Limit = 70 kmph
const speedLimit = 70;
function checkSpeed(speed) {
    let extraKmph = speed - speedLimit;
    let step = 0.2;
    let points = Math.floor( step * extraKmph );
    if (points <= 0) return 'Ok';
    if (points > 12) return 'License Suspended';
    return points;
}

console.log(checkSpeed(30));

console.log(checkSpeed(72));

console.log(checkSpeed(75));

console.log(checkSpeed(80));

console.log(checkSpeed(180));
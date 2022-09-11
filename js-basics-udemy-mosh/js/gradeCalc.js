function calculateAverageGrade(marksList) {
    let total = 0;
    for (let marks of marksList) {
        total += marks;
    }
    let avg = total / marksList.length;
    if (avg < 60) {
        return 'F';
    } else if (avg < 70) {
        return 'D';
    } else if (avg < 80) {
        return 'C';
    } else if (avg < 90) {
        return 'B';
    } else if (avg < 100) {
        return 'A';
    }
}

console.log(calculateAverageGrade([80, 80, 50]));
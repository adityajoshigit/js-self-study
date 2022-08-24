// let a = 'red';
// let b = 'blue';

// console.log('a = ' + a);
// console.log('b = ' + b);

// let c = a;
// a = b;
// b = c;

// console.log('a = ' + a);
// console.log('b = ' + b);

const video = {
    title: 'Game of Thrones S1 E1',
    duration: 3,
    durationUnit: 'hours',
    play() {
        console.log('Playing Video');
        console.log('this', this);
    }
};

// console.log('this', this);
// video.play();
// console.log('this', this);

let sum = function(...args) {
    return (
        Array.isArray(args[0]) ? args[0].reduce((a, b) => a + b)
        : args.reduce((a, b) => a + b)
    );
}

console.log(sum([1,2,3]));


// const c1 = new Circle({ x: 1, y:1 } , 5);

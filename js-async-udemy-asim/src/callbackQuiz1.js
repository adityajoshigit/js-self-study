function doAsyncTask(cb) {
    cb();
}
// let asyncFnRef = () => {
//     doAsyncTask(() => console.log(message));
// };
// setTimeout(asyncFnRef, 3000);
doAsyncTask(() => console.log(message));
console.log("going ahead...");
let message = "Callback Called";
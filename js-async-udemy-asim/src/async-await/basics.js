const doAsyncTask = (task) => {
    return new Promise(
        resolve => setTimeout(
            () => resolve(task + " done"),
            5000
        )
    );
};

const processFlow = async () => {
    console.log("initializing process...");
    let result = await doAsyncTask("task 1");
    console.log("waiting for async task to complete...");
    console.log(result);
    console.log("process finished...");
};

console.log("Bonjour!");
processFlow();
console.log("Ca va?");
console.log("Ca va bien!");
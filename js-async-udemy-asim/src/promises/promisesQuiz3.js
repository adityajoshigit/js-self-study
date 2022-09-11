// chain promises
const getData1 = (id) => id;
const getData2 = (id) => id;

const task1 = (val) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (isError = false, data) => {
                console.log("error status", isError);
                if (isError) {
                    reject("some error");
                } else {
                    const dataObtained = getData1(val + "-task1-done-");
                    console.log(dataObtained);
                    resolve(dataObtained);
                }
            },
            3000
        );
    });
};

const task2 = (val) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (isError = false, data) => {
                console.log("error status", isError);
                if (isError) {
                    reject("some error");
                } else {
                    const dataObtained = getData1(val + "-task2-done-");
                    console.log(dataObtained);
                    resolve(dataObtained);
                }
            },
            3000
        );
    });
};

const task3 = (val) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (isError = false, data) => {
                console.log("error status", isError);
                if (isError) {
                    reject("some error");
                } else {
                    const dataObtained = getData1(val + "-task3-done-");
                    console.log(dataObtained);
                    resolve(dataObtained);
                }
            },
            3000
        );
    });
};

Promise.resolve(task1("task0-done"))
    .then(
        dataAfterTask1 => task2(dataAfterTask1),
        errAfterTask1 => console.log("err after task 1")
    )
    .then(
        dataAfterTask2 => task3(dataAfterTask2),
        errAfterTask2 => console.log("err after task 2")
    )
    .then(
        dataAfterTask3 => console.log(dataAfterTask3),
        errAfterTask3 => console.log("err after task 3")
    );
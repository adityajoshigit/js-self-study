// chain promises
const getData1 = (id) => id;
const getData2 = (id) => id;

const task1 = (val) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (isError = (Math.random() < 0.5), data) => {
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
            (isError = (Math.random() < 0.5), data) => {
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
            (isError = (Math.random() < 0.5), data) => {
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
        dataAfterTask1 => task2(dataAfterTask1)
    )
    .then(
        dataAfterTask2 => task3(dataAfterTask2)
    )
    .then(
        dataAfterTask3 => console.log(dataAfterTask3)
    )
    .catch(
        err => console.error("err after task - " + err)
    );
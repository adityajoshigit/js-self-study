// 1 publish
// 2 authenticate
// timeout if more than 1 sec

const publish = (articleContent) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    const resp = (Math.random() < 0.4)
                        ? { status: 200 }
                        : { status: 403 };
                    console.log(resp);
                    resolve(resp);
                },
                500
            );
        }
    );
};

const login = (username, password) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    if (Math.random() < 0.4) resolve("logged in");
                    else reject("login failed");
                },
                500
            );
        }
    );
};

const timeout = (maxTime) => {
    return new Promise(resolve => setTimeout(() => resolve("time out"), 1000));
};

publish("this is to be published")
    .then(
        resp => ((resp.status === 200) ? "" : login("me", "1234"))
    )
    .then(
        result => console.log(result)
    )
    .catch(
        err => console.log("error encountered :: \n\n" + err)
    );
function StopWatch() {
    let startMoment, stopMoment, duration = 0;
    let inProcess = false;

    Object.defineProperty(
        this,
        'duration',
        {
            get: function () {
                if (!startMoment) {
                    console.log('Stopwatch is not stopped.');
                    return;
                }
                if(!stopMoment) {
                    console.log('Stopwatch is not stopped.');
                    return;
                }
                duration = duration + ( stopMoment.getTime() - startMoment.getTime() ) / 1000;
                return duration; 
            }
        }
    );

    
}



let sw = new StopWatch();

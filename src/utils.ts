function throttle<T extends (...args: any[]) => Promise<any> | any>(callback:T, delay:number) {
    let lastTime = 0;
    return (...args:unknown[]) => {
        let curTime = Date.now();
        if (curTime - lastTime > delay) {
            lastTime = curTime;
            return callback(...args);
        }
    }
}

export {
    throttle
}
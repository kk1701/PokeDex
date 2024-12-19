function useDebounce(cb, delay = 2000){     //cb = input callback function that is to be modified

    let timerId;
    return(...args) => {        //modified callback function which is called after given delay
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

export default useDebounce
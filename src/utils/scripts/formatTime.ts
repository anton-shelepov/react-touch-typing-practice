interface ITime {
    seconds: number;
    minutes: number;
    hours?: number;
}

const formatTime = (time: ITime) => {
    if (time.hours === 0) {
        delete time.hours;
    }
    return Object.values(time)
        .map((item: number) => (item < 10 ? `0${item}` : item.toString()))
        .join(":");
};

export default formatTime;

import { useEffect, useState } from "react";
import formatTime from "../scripts/formatTime";

const useTimeFromRender = (): [number, string] => {
    const [time, setTime] = useState({
        totalSeconds: 0,
        formattedTime: "00:00",
    });

    useEffect(() => {
        // Переменные для создания времени формата - 00:00:00
        let [seconds, minutes, hours] = [0, 0, 0];

        //Переменная для подсчета всего прошедшего времени в секундах
        let totalSeconds = 0;

        const interval = setInterval(() => {
            totalSeconds++;
            seconds++;
            if (seconds > 59) {
                minutes++;
                seconds = 0;
            }
            if (minutes > 59) {
                hours++;
                minutes = 0;
            }
            if (hours > 23) {
                hours = 0;
            }
            setTime({
                totalSeconds,
                formattedTime: formatTime({ hours, minutes, seconds }),
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return [time.totalSeconds, time.formattedTime];
};

export default useTimeFromRender;

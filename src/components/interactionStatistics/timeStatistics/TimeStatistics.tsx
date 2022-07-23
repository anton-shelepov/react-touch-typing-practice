import { useEffect, useState } from "react";
import formatTime from "../../../utils/scripts/formatTime";
import SvgIcon from "../../../utils/svg/svgIcon.enum";
import StatisticsItem from "../../statisticsItem/StatisticsItem";

interface IProps {}

const TimeStatistics: React.FC<IProps> = () => {
    const [timeFromStart, setTimeFromStart] = useState("00:00");

    useEffect(() => {
        let [seconds, minutes, hours] = [0, 0, 0];
        const interval = setInterval(() => {
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
            setTimeFromStart(formatTime({ hours, minutes, seconds }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <StatisticsItem iconName={SvgIcon.CLOCK} name="Время" unit="" value={timeFromStart} />;
};

export default TimeStatistics;

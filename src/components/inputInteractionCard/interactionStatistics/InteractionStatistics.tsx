import { useEffect, useRef, useState } from "react";
import SvgIcon from "../../../utils/svg/svgIcon.enum";
import StatisticsItem from "../../statisticsItem/StatisticsItem";
import ButtonTransparentWithIcon from "../../_common/buttons/buttonTransparentWithIcon/ButtonTransparentWithIcon";
import s from "./InteractionStatistics.module.scss";

interface IProps {
    mistakesCount: number;
    textLength: number;
    completedCount: number;
}

const InteractionStatistics: React.FC<IProps> = ({ mistakesCount, textLength, completedCount }) => {
    const [speed, setSpeed] = useState(0);
    const prevIntervalTickCompletedCount = useRef(0);
    console.log(completedCount);
    useEffect(() => {
        const interval = setInterval(() => {
            setSpeed((completedCount - prevIntervalTickCompletedCount.current) * 60);
            prevIntervalTickCompletedCount.current = completedCount;
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const totalInputsCount = mistakesCount + completedCount;

    const accuracy = (totalInputsCount - mistakesCount) * 100;

    return (
        <div className={s.container}>
            <div className={s.statistics}>
                <StatisticsItem
                    iconName={SvgIcon.SPEED}
                    name="Скорость"
                    unit=" зн/м"
                    value={speed}
                />
                <StatisticsItem
                    iconName={SvgIcon.ACCURACY}
                    name="Точность"
                    unit="%"
                    value={+accuracy < 0 ? 0 : accuracy}
                />
                <StatisticsItem iconName={SvgIcon.CLOCK} name="Время" unit="" value={2} />
            </div>
            <div className={s.buttons}>
                <ButtonTransparentWithIcon
                    value="Начать заново"
                    color="white"
                    iconName={SvgIcon.RESTART}
                />
            </div>
        </div>
    );
};

export default InteractionStatistics;

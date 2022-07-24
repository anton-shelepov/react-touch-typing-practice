import { useCallback } from "react";
import useTimeFromRender from "../../utils/hooks/useTimeFromRender";
import getInputsAccuracy from "../../utils/scripts/getInputsAccuracy";
import SvgIcon from "../../utils/svg/svgIcon.enum";
import StatisticsItem from "../statisticsItem/StatisticsItem";
import ButtonTransparentWithIcon from "../_common/buttons/buttonTransparentWithIcon/ButtonTransparentWithIcon";
import s from "./InteractionStatistics.module.scss";

interface IProps {
    mistakesCount: number;
    completeCount: number;
    onHandleRestartClick: () => void;
    onReachedNewMaxSpeed: (value: number) => void;
    maxSpeed: number;
}

const InteractionStatistics: React.FC<IProps> = ({
    mistakesCount,
    completeCount,
    onHandleRestartClick,
    maxSpeed,
    onReachedNewMaxSpeed,
}) => {
    const [totalSecondsFromStart, formattedTimeFromStart] = useTimeFromRender();

    const totalInputsCount = mistakesCount + completeCount;
    const accuracy = getInputsAccuracy(mistakesCount, totalInputsCount);

    const getSpeed = useCallback(() => {
        const speed = Math.round((completeCount / totalSecondsFromStart) * 60) || 0;
        if (speed > maxSpeed) {
            onReachedNewMaxSpeed(speed);
        }
        return speed;
    }, [totalSecondsFromStart]);

    return (
        <div className={s.container}>
            <div className={s.statistics}>
                <StatisticsItem
                    iconName={SvgIcon.SPEED}
                    name="Скорость"
                    unit=" зн/м"
                    value={getSpeed()}
                />
                <StatisticsItem
                    iconName={SvgIcon.ACCURACY}
                    name="Точность"
                    unit="%"
                    value={accuracy}
                />
                <StatisticsItem
                    iconName={SvgIcon.CLOCK}
                    name="Время"
                    unit=""
                    value={formattedTimeFromStart}
                />
            </div>
            <div className={s.buttons}>
                <ButtonTransparentWithIcon
                    value="Начать заново"
                    color="white"
                    iconName={SvgIcon.RESTART}
                    onClick={onHandleRestartClick}
                />
            </div>
        </div>
    );
};

export default InteractionStatistics;

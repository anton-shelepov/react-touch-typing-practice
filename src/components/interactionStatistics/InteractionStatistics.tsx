import { useEffect, useMemo } from "react";
import useTimeFromPracticeStart from "../../utils/hooks/useTimeFromPracticeStart";
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
    const [totalSecondsFromStart, formattedTimeFromStart] = useTimeFromPracticeStart();

    const totalInputsCount = mistakesCount + completeCount;
    const accuracy = getInputsAccuracy(mistakesCount, totalInputsCount);

    const currentSpeed = useMemo(() => {
        const speed = Math.round((completeCount / totalSecondsFromStart) * 60) || 0;
        return speed;
    }, [totalSecondsFromStart]);

    useEffect(() => {
        if (currentSpeed > maxSpeed) {
            onReachedNewMaxSpeed(currentSpeed);
        }
    }, [currentSpeed]);

    return (
        <div className={s.container}>
            <div className={s.statistics}>
                <StatisticsItem
                    iconName={SvgIcon.SPEED}
                    name="Скорость"
                    unit=" зн/м"
                    value={currentSpeed}
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

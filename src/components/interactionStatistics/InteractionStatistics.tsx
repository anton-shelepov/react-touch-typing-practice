import { useCallback } from "react";
import { setPracticeStatus } from "../../store/slices/practiceSlice/practiceSlice";
import PracticeStatus from "../../utils/enums/practiceStatus.enum";
import useAppDispatch from "../../utils/hooks/useAppDispatch";
import useTimeFromRender from "../../utils/hooks/useTimeFromRender";
import SvgIcon from "../../utils/svg/svgIcon.enum";
import StatisticsItem from "../statisticsItem/StatisticsItem";
import ButtonTransparentWithIcon from "../_common/buttons/buttonTransparentWithIcon/ButtonTransparentWithIcon";
import s from "./InteractionStatistics.module.scss";

interface IProps {
    mistakesCount: number;
    completeCount: number;
}

const InteractionStatistics: React.FC<IProps> = ({ mistakesCount, completeCount }) => {
    const dispatch = useAppDispatch();
    const [totalSecondsFromStart, formattedTimeFromStart] = useTimeFromRender();

    const totalInputsCount = mistakesCount + completeCount;

    // Точность рассчитывается как соотношение общего количества введенных символов (включая ошибки)
    // к количеству ошибок, при каждом повторном совершении неверного ввода, количество ошибок увеличивается
    const getAccuracy = () => {
        return 100 - (mistakesCount / (totalInputsCount || 1)) * 100;
    };

    const getSpeed = useCallback(() => {
        return Math.round((completeCount / totalSecondsFromStart) * 60) || 0;
    }, [totalSecondsFromStart]);

    const onHandleRestartClick = () => {
        dispatch(setPracticeStatus(PracticeStatus.PREPARING));
    };

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
                    value={getAccuracy().toFixed(2)}
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

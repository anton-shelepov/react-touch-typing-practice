import SvgIcon from "../../../utils/svg/svgIcon.enum";
import StatisticsItem from "../../statisticsItem/StatisticsItem";

interface IProps {
    mistakesCount: number;
    totalInputsCount: number;
}

const AccuracyStatistics: React.FC<IProps> = ({ mistakesCount, totalInputsCount }) => {
    // Точность рассчитывается как соотношение общего количества введенных символов (включая ошибки)
    // к количеству ошибок, при каждом повторном совершении неверного ввода, количество ошибок увеличивается
    const getAccuracy = () => {
        const accuracy = 100 - (mistakesCount / (totalInputsCount || 1)) * 100;
        return accuracy;
    };

    return (
        <StatisticsItem
            iconName={SvgIcon.ACCURACY}
            name="Точность"
            unit="%"
            value={getAccuracy().toFixed(2)}
        />
    );
};

export default AccuracyStatistics;

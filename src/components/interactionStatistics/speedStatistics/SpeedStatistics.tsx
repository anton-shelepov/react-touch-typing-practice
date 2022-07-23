import SvgIcon from "../../../utils/svg/svgIcon.enum";
import StatisticsItem from "../../statisticsItem/StatisticsItem";
import s from "./SpeedStatistics.module.scss";

interface IProps {}

const SpeedStatistics: React.FC<IProps> = () => {
    return <StatisticsItem iconName={SvgIcon.SPEED} name="Скорость" unit=" зн/м" value={123} />;
};

export default SpeedStatistics;

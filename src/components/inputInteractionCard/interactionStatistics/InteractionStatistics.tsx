import SvgIcon from "../../../utils/svg/svgIcon.enum";
import StatisticsItem from "../../statisticsItem/StatisticsItem";
import ButtonTransparentWithIcon from "../../_common/buttons/buttonTransparentWithIcon/ButtonTransparentWithIcon";
import s from "./InteractionStatistics.module.scss";

interface IProps {}

const InteractionStatistics: React.FC<IProps> = () => {
    return (
        <div className={s.container}>
            <div className={s.statistics}>
                <StatisticsItem iconName={SvgIcon.SPEED} name="Скорость" unit=" зн/м" value={552} />
                <StatisticsItem iconName={SvgIcon.ACCURACY} name="Точность" unit="%" value={100} />
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
